import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

# Generate synthetic data
np.random.seed(42)
num_samples = 1000

# Features
income = np.random.uniform(20000, 200000, num_samples)  # Monthly income between 20k and 200k
essential_expenses = income * np.random.uniform(0.3, 0.7, num_samples)  # 30% to 70% of income
savings_goal_percentage = np.random.uniform(5, 30, num_samples)  # 5% to 30%

# Target variables (budget allocations)
savings_amount = income * (savings_goal_percentage / 100)
discretionary = income - essential_expenses - savings_amount

# Create DataFrame
data = pd.DataFrame({
    'income': income,
    'essential_expenses': essential_expenses,
    'savings_goal_percentage': savings_goal_percentage,
    'savings_amount': savings_amount,
    'discretionary': discretionary
})

# Features and targets
X = data[['income', 'essential_expenses', 'savings_goal_percentage']]
y = data[['savings_amount', 'discretionary']]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'budget_model.joblib')

print("Model trained and saved as budget_model.joblib")
