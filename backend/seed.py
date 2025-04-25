from app import app
from models import db, User, Program, Enrollment
from datetime import datetime
from faker import Faker
import random

# Initialize Faker to generate random user data
fake = Faker()

# Sample program names
program_names = [
    "Tuberculosis (TB) Management",
    "HIV/AIDS Care and Support",
    "Malaria Prevention and Treatment",
    "COVID-19 Monitoring & Vaccination",
    "Hepatitis B and C Treatment",
    "Sexually Transmitted Infections (STIs) Program",
    "Antenatal and Postnatal Care",
    "Immunization Program (EPI)",
    "Nutrition and Growth Monitoring",
    "Family Planning Services",
    "Child Wellness and Vaccination",
    "Hypertension Monitoring",
    "Cancer Screening and Awareness (e.g., Breast, Cervical)",
    "Mental Health Support",
    "Cardiovascular Health Program",
    "Substance Abuse Rehabilitation",
    "Gender-Based Violence (GBV) Support",
    "Adolescent and Youth Health Program",
    "Community Health Outreach"
]

# Number of users to generate
num_users = 10  # Adjust as needed

# Start seeding
with app.app_context():
    # Clear existing data (optional but helpful during development)
    Enrollment.query.delete()
    User.query.delete()
    Program.query.delete()

    # Seed programs
    programs = []
    for name in program_names:
        program = Program(name=name, description=f"{name} Description")
        programs.append(program)
        db.session.add(program)

    # Seed random users using Faker
    users = []
    for _ in range(num_users):
        user = User(
            name=fake.name(),
            email=fake.email(),
            contact=fake.phone_number(),
            password=fake.password()
        )
        users.append(user)
        db.session.add(user)

    db.session.commit()

    # Seed enrollments (each user enrolls in 2 random programs)
    enrollments = []
    for user in users:
        enrolled_programs = random.sample(programs, 2)  # Randomly pick 2 programs for each user
        for program in enrolled_programs:
            enrollment = Enrollment(user_id=user.id, program_id=program.id, created_at=datetime.utcnow().date())
            enrollments.append(enrollment)
            db.session.add(enrollment)

    db.session.commit()

    print(f"✅ {num_users} Users, {len(programs)} Programs, and Enrollments have been seeded.")
