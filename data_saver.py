import numpy as np
import pandas as pd
from pymongo import MongoClient

# Generate the data
np.random.seed(42)
num_samples = 1000000

income = np.random.uniform(20000, 200000, num_samples)
essential_expenses = income * np.random.uniform(0.3, 0.7, num_samples)
savings_goal_percentage = np.random.uniform(5, 30, num_samples)

data = pd.DataFrame({
    'Income': income,
    'Essential_Expenses': essential_expenses,
    'Savings_Goal_Percentage': savings_goal_percentage
})

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Update this if you're using MongoDB Atlas or another host
db = client["finance_db"]                           # Database name
collection = db["financial_data"]                   # Collection name

# Convert DataFrame to dictionary and insert
records = data.to_dict(orient='records')
collection.insert_many(records)

print("Data successfully pushed to MongoDB.")
