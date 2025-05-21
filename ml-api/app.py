from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  


model = joblib.load('budget_model.joblib')

@app.route('/predict-budget', methods=['POST'])
def predict_budget():
    data = request.get_json()
    income = float(data.get('income', 0))
    essential_expenses = float(data.get('essentialExpenses', 0))
    savings_goal_percentage = float(data.get('savingsGoalPercentage', 0))

    
    input_features = np.array([[income, essential_expenses, savings_goal_percentage]])


    prediction = model.predict(input_features)[0]
    savings_amount = prediction[0]
    discretionary = prediction[1]


    spending_warning = None
    savings_suggestion = None
    insight = ''

    if essential_expenses > income * 0.6:
        spending_warning = 'Your essential expenses are quite high. Consider reviewing your fixed costs.'

    if savings_goal_percentage < 15:
        savings_suggestion = 'Consider increasing your savings rate to at least 15% for better financial security.'

    if discretionary < income * 0.2:
        insight = 'Your discretionary spending is limited. Look for ways to reduce essential expenses to have more flexibility.'
    else:
        insight = 'Great balance! You have enough for essentials, savings, and discretionary spending.'

    result = {
        'income': income,
        'essentials': essential_expenses,
        'savings': savings_amount,
        'discretionary': discretionary,
        'savingsPercentage': savings_goal_percentage,
        'spendingWarning': spending_warning,
        'savingsSuggestion': savings_suggestion,
        'insight': insight
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
