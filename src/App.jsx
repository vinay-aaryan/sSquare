// src/App.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaHome, FaCalculator, FaPiggyBank, FaCog, FaSun, FaMoon, FaRupeeSign, FaChartLine, FaLightbulb, FaInfoCircle, FaExclamationTriangle, FaShoppingCart, FaMugHot, FaBell, FaSync } from 'react-icons/fa';
import './styles/animations.css';

// --- Theme Context ---
const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

// --- Helper Function ---
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);  
}

// --- Home Page Component ---
function HomePage() {
    return (
        <div className="space-y-12 animate-slide-in">
            {/* Hero Section with 3D Effect */}
            <section className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-90 dark:opacity-100"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 p-8 md:p-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">S³</span>
                            <span className="block text-3xl md:text-4xl mt-2 font-light">Smart Savings Solution</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            Transform your financial future with AI-powered insights and smart budgeting tools
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <Link
                                to="/budget"
                                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full text-lg transition-all duration-300 ease-in-out shadow-lg hover:scale-105 button-hover flex items-center justify-center gap-2"
                            >
                                <FaCalculator className="text-xl" /> Start Budgeting
                            </Link>
                            <Link
                                to="/savings"
                                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full text-lg transition-all duration-300 ease-in-out shadow-lg hover:scale-105 button-hover flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <FaPiggyBank className="text-xl" /> View Savings
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section with Glass Cards */}
            <section className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm card-hover transform transition-all duration-500 hover:scale-105 animate-slide-in glass" style={{ animationDelay: '0.2s' }}>
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <FaCalculator className="text-3xl text-blue-600 dark:text-blue-400 animate-float"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Smart Budgeting</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">Get personalized budget plans that adapt to your lifestyle and financial goals.</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm card-hover transform transition-all duration-500 hover:scale-105 animate-slide-in glass" style={{ animationDelay: '0.4s' }}>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <FaPiggyBank className="text-3xl text-green-600 dark:text-green-400 animate-float"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Savings Goals</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">Set and track your savings targets with AI-powered insights and projections.</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm card-hover transform transition-all duration-500 hover:scale-105 animate-slide-in glass" style={{ animationDelay: '0.6s' }}>
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <FaLightbulb className="text-3xl text-yellow-600 dark:text-yellow-400 animate-float"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Smart Insights</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">Get actionable insights to improve your financial habits and make better decisions.</p>
                </div>
            </section>

            {/* Why Choose S³ Section with Gradient Background */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border border-indigo-100 dark:border-gray-700 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Why Choose S³?</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaChartLine className="text-indigo-600 dark:text-indigo-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Smart Analysis</h3>
                            <p className="text-gray-600 dark:text-gray-300">AI-powered insights help you understand your spending patterns and make better financial decisions.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaCalculator className="text-blue-600 dark:text-blue-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Personalized Budgeting</h3>
                            <p className="text-gray-600 dark:text-gray-300">Get budget plans tailored to your income, expenses, and financial goals.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaPiggyBank className="text-green-600 dark:text-green-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Savings Goals</h3>
                            <p className="text-gray-600 dark:text-gray-300">Set and track your savings targets with realistic projections and growth estimates.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaLightbulb className="text-yellow-600 dark:text-yellow-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Financial Tips</h3>
                            <p className="text-gray-600 dark:text-gray-300">Get personalized tips and recommendations to improve your financial health.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center p-8 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-black rounded-2xl shadow-xl animate-slide-in" style={{ animationDelay: '1s' }}>
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Finances?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of users who are taking control of their financial future with S³</p>
                <Link
                    to="/budget"
                    className="inline-block px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full text-lg transition-all duration-300 ease-in-out shadow-lg hover:scale-105 button-hover"
                >
                    Get Started Now
                </Link>
            </section>
        </div>
    );
}

// --- Budget Page Component ---
function BudgetPage({ budgetPlan, setBudgetPlan }) {
    const [income, setIncome] = useState('');
    const [essentialExpenses, setEssentialExpenses] = useState('');
    const [savingsGoalPercentage, setSavingsGoalPercentage] = useState('');

    const handleGenerateBudget = (data) => {
        const { income, essentialExpenses, savingsGoalPercentage } = data;
        const incomeNum = parseFloat(income);
        const essentialsNum = parseFloat(essentialExpenses);
        const savingsPercent = parseFloat(savingsGoalPercentage);

        // Calculate budget allocations
        const savingsAmount = (incomeNum * savingsPercent) / 100;
        const discretionary = incomeNum - essentialsNum - savingsAmount;

        // Generate insights and warnings
        let spendingWarning = null;
        let savingsSuggestion = null;
        let insight = '';

        if (essentialsNum > incomeNum * 0.6) {
            spendingWarning = 'Your essential expenses are quite high. Consider reviewing your fixed costs.';
        }

        if (savingsPercent < 15) {
            savingsSuggestion = 'Consider increasing your savings rate to at least 15% for better financial security.';
        }

        if (discretionary < incomeNum * 0.2) {
            insight = 'Your discretionary spending is limited. Look for ways to reduce essential expenses to have more flexibility.';
        } else {
            insight = 'Great balance! You have enough for essentials, savings, and discretionary spending.';
        }

        setBudgetPlan({
            income: incomeNum,
            essentials: essentialsNum,
            savings: savingsAmount,
            discretionary: discretionary,
            savingsPercentage: savingsPercent,
            spendingWarning,
            savingsSuggestion,
            insight
        });
    };

    return (
        <div className="space-y-8 animate-slide-in">
            <InputForm onGenerateBudget={handleGenerateBudget} />
            {budgetPlan && <BudgetDisplay budgetPlan={budgetPlan} />}
        </div>
    );
}

// --- Input Form Component ---
function InputForm({ onGenerateBudget }) {
    const [income, setIncome] = useState('');
    const [essentialExpenses, setEssentialExpenses] = useState('');
    const [savingsGoalPercentage, setSavingsGoalPercentage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerateBudget({
            income,
            essentialExpenses,
            savingsGoalPercentage
        });
    };

    return (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-slide-in">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2"><FaCalculator /> Enter Financial Details</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="income" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Monthly Income (₹):</label>
                    <input
                        type="number" id="income" value={income} onChange={(e) => setIncome(e.target.value)}
                        placeholder="e.g., 50000" required min="0" step="100"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white input-focus"
                    />
                </div>
                <div>
                    <label htmlFor="essentialExpenses" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Monthly Essentials (₹):</label>
                    <input
                        type="number" id="essentialExpenses" value={essentialExpenses} onChange={(e) => setEssentialExpenses(e.target.value)}
                        placeholder="e.g., 20000 (Rent, Food)" required min="0" step="50"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white input-focus"
                    />
                </div>
                <div>
                    <label htmlFor="savingsGoalPercentage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Savings (%):</label>
                    <input
                        type="number" id="savingsGoalPercentage" value={savingsGoalPercentage} onChange={(e) => setSavingsGoalPercentage(e.target.value)}
                        placeholder="e.g., 15" required min="0" max="100" step="1"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white input-focus"
                    />
                </div>
                <div className="md:col-span-3 mt-2">
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition-all duration-300 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:scale-105 button-hover"
                    >
                        Generate Smart Budget Plan
                    </button>
                </div>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 flex items-center gap-1"><FaInfoCircle /> Essentials include rent, utilities, groceries, transport, insurance etc.</p>
        </section>
    );
}

// --- Budget Display Component ---
function BudgetDisplay({ budgetPlan }) {
    const essentialsPercent = Math.round((budgetPlan.essentials / budgetPlan.income) * 100);
    const savingsPercent = Math.round((budgetPlan.savings / budgetPlan.income) * 100);
    const discretionaryPercent = Math.round((budgetPlan.discretionary / budgetPlan.income) * 100);

    return (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-white">Your Personalized Budget Plan</h2>

            {/* Progress Bar Visualization */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-6 overflow-hidden flex text-xs text-white font-medium">
                {budgetPlan.essentials > 0 && <div style={{ width: `${essentialsPercent}%` }} className="bg-blue-600 h-6 flex items-center justify-center progress-animate">E: {essentialsPercent}%</div>}
                {budgetPlan.savings > 0 && <div style={{ width: `${savingsPercent}%` }} className="bg-green-600 h-6 flex items-center justify-center progress-animate">S: {savingsPercent}%</div>}
                {budgetPlan.discretionary > 0 && <div style={{ width: `${discretionaryPercent}%` }} className="bg-yellow-500 h-6 flex items-center justify-center progress-animate">D: {discretionaryPercent}%</div>}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Essentials Card */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-md card-hover">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-2"><FaShoppingCart /> Essentials</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xl font-medium">{formatCurrency(budgetPlan.essentials)}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">({essentialsPercent}%) Covers core costs.</p>
                </div>
                {/* Savings Card */}
                <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md card-hover">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 flex items-center gap-2"><FaPiggyBank /> Savings Goal</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xl font-medium">{formatCurrency(budgetPlan.savings)}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">({budgetPlan.savingsPercentage}%) Your target.</p>
                    {budgetPlan.savingsSuggestion && <p className="text-xs text-green-600 dark:text-green-400 mt-1 italic">{budgetPlan.savingsSuggestion}</p>}
                </div>
                {/* Discretionary Card */}
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-md card-hover">
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 flex items-center gap-2"><FaMugHot /> Discretionary</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xl font-medium">{formatCurrency(budgetPlan.discretionary)}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">({discretionaryPercent}%) For wants.</p>
                </div>
            </div>

            {/* Warnings and Insights */}
            {budgetPlan.spendingWarning && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/50 border border-red-300 dark:border-red-700 rounded-md text-red-700 dark:text-red-300 text-sm flex items-center gap-2 animate-pulse-slow">
                    <FaExclamationTriangle /> {budgetPlan.spendingWarning}
                </div>
            )}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-md card-hover">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 flex items-center gap-2"><FaLightbulb /> S³ Insight</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{budgetPlan.insight}</p>
            </div>
        </section>
    );
}

// --- Savings Page Component ---
function SavingsPage({ budgetPlan }) {
    if (!budgetPlan || budgetPlan.income <= 0) {
        return (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center animate-slide-in">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center justify-center gap-2"><FaChartLine /> Savings Projection</h2>
                <p className="text-gray-600 dark:text-gray-400">Please generate a budget plan first on the 'Budget' page to see your savings projection.</p>
                <Link to="/budget" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-transform duration-300">Go to Budget Planner</Link>
            </div>
        );
    }

    const monthlySavings = budgetPlan.savings;
    const annualSavings = monthlySavings * 12;

    // Calculate projections
    const projections = [
        { years: 1, amount: annualSavings },
        { years: 3, amount: annualSavings * 3 },
        { years: 5, amount: annualSavings * 5 },
        { years: 10, amount: annualSavings * 10 }
    ];

    // Calculate compound projections (assuming 6% annual growth)
    const compoundProjections = projections.map(p => {
        const years = p.years;
        let amount = 0;
        let currentSavings = monthlySavings;
        
        for (let i = 0; i < years; i++) {
            amount += currentSavings * 12;
            amount *= 1.06; // 6% annual growth
        }
        
        return { years, amount: Math.round(amount) };
    });

    return (
        <div className="space-y-8 animate-slide-in">
            <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2"><FaChartLine /> Savings Projection</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Based on your current plan of saving <span className="font-semibold text-green-600 dark:text-green-400">{formatCurrency(monthlySavings)}</span> per month ({budgetPlan.savingsPercentage}% of income):
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Simple Projection */}
                    <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Simple Projection (No Growth)</h3>
                        <div className="space-y-2">
                            {projections.map((p, index) => (
                                <div 
                                    key={p.years} 
                                    className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded card-hover"
                                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                >
                                    <span className="text-sm text-gray-600 dark:text-gray-300">After {p.years} Year{p.years > 1 ? 's': ''}:</span>
                                    <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(p.amount)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Compound Projection */}
                    <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Potential Growth (Est. 6% Annual)</h3>
                        <div className="space-y-2">
                            {compoundProjections.map((p, index) => (
                                <div 
                                    key={p.years} 
                                    className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/30 rounded card-hover"
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                >
                                    <span className="text-sm text-gray-600 dark:text-gray-300">After {p.years} Year{p.years > 1 ? 's': ''}:</span>
                                    <span className="font-medium text-green-700 dark:text-green-300">{formatCurrency(p.amount)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 italic">
                    <FaInfoCircle className="inline mr-1" /> Disclaimer: Projections are illustrative. Actual returns depend on consistency, investment choices, and market conditions. The 6% growth is a hypothetical example.
                </p>
            </section>

            {/* Chart Section */}
            <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Visual Growth</h3>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 animate-pulse-slow"></div>
                    <div className="relative z-10 text-center p-4">
                        <FaChartLine className="text-4xl mx-auto mb-2 text-blue-500 dark:text-blue-400 animate-float" />
                        <p>Interactive chart visualization coming soon!</p>
                        <p className="text-sm mt-2">We're working on adding beautiful, interactive charts to help you visualize your financial growth.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- Privacy Policy Page Component ---
function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto p-6 animate-slide-in">
            <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm glass">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        Privacy Policy
                    </span>
                </h1>
                
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <section className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">1. Information We Collect</h2>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Account information (email, name)</li>
                            <li>Financial data you input (budgets, savings goals)</li>
                            <li>Usage data and preferences</li>
                        </ul>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Provide and improve our services</li>
                            <li>Personalize your experience</li>
                            <li>Send you important updates and notifications</li>
                        </ul>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your data:</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Encryption of sensitive data</li>
                            <li>Regular security audits</li>
                            <li>Secure data storage</li>
                        </ul>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">4. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Access your personal data</li>
                            <li>Request data deletion</li>
                            <li>Update your information</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 ease-in-out hover:scale-105 button-hover">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

// --- Settings Page Component ---
function SettingsPage() {
    const { theme, toggleTheme } = useTheme();
    const [notifications, setNotifications] = useState(true);
    const [dataSync, setDataSync] = useState(true);
    const [currency, setCurrency] = useState('INR');

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8 animate-slide-in">
            {/* Theme Settings */}
            <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm glass">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <FaCog className="text-blue-600 dark:text-blue-400 animate-pulse-slow" />
                    Appearance Settings
                </h2>
                
                <div className="space-y-6">
                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {theme === 'light' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-400" />}
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Theme</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Switch between light and dark mode</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${
                                theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
                                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>

                    {/* Currency Selection */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <FaRupeeSign className="text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Currency</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Select your preferred currency</p>
                            </div>
                        </div>
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="INR">Indian Rupee (₹)</option>
                            <option value="USD">US Dollar ($)</option>
                            <option value="EUR">Euro (€)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm glass">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <FaBell className="text-yellow-500 dark:text-yellow-400 animate-pulse-slow" />
                    Notification Settings
                </h2>
                
                <div className="space-y-6">
                    {/* Notifications Toggle */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                <FaBell className="text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Notifications</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates and reminders</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setNotifications(!notifications)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${
                                notifications ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
                                    notifications ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>

                    {/* Data Sync Toggle */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <FaSync className="text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Data Sync</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Sync your data across devices</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setDataSync(!dataSync)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${
                                dataSync ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
                                    dataSync ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Coming Soon Features */}
            <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm glass">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500 dark:text-yellow-400 animate-pulse-slow" />
                    Coming Soon
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                <FaChartLine className="text-blue-600 dark:text-blue-400 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Advanced Analytics</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Detailed spending patterns and insights</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-green-50 dark:bg-green-900/30 rounded-xl border border-green-200 dark:border-green-800 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                                <FaPiggyBank className="text-green-600 dark:text-green-400 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Smart Savings Goals</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered savings recommendations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Header Component ---
function Header() {
    const { theme, toggleTheme } = useTheme();

    const activeStyle = "bg-blue-700 dark:bg-gray-700 text-white";
    const inactiveStyle = "text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-600 hover:text-white";
    const commonStyle = "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 hover:scale-105";

    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-black text-white p-4 shadow-lg sticky top-0 z-10 glass">
            <nav className="container mx-auto flex justify-between items-center max-w-6xl">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 animate-pulse-slow">
                  <FaPiggyBank className="text-yellow-300 animate-float"/> S³ <span className="text-sm font-light hidden sm:inline">- Spend & Save Smartly</span>
                </Link>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <NavLink to="/" className={({ isActive }) => `${commonStyle} ${isActive ? activeStyle : inactiveStyle}`}>
                        <FaHome /> <span className="hidden md:inline">Home</span>
                    </NavLink>
                    <NavLink to="/budget" className={({ isActive }) => `${commonStyle} ${isActive ? activeStyle : inactiveStyle}`}>
                        <FaCalculator /> <span className="hidden md:inline">Budget</span>
                    </NavLink>
                    <NavLink to="/savings" className={({ isActive }) => `${commonStyle} ${isActive ? activeStyle : inactiveStyle}`}>
                        <FaChartLine /> <span className="hidden md:inline">Savings</span>
                    </NavLink>
                    <NavLink to="/settings" className={({ isActive }) => `${commonStyle} ${isActive ? activeStyle : inactiveStyle}`}>
                        <FaCog /> <span className="hidden md:inline">Settings</span>
                    </NavLink>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-blue-500 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out hover:scale-110 button-hover"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <FaMoon className="text-yellow-300" /> : <FaSun className="text-yellow-400" />}
                    </button>
                </div>
            </nav>
        </header>
    );
}

// --- Footer Component ---
function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-black text-white p-4 shadow-lg glass">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">© {new Date().getFullYear()} S³ - Spend & Save Smartly</p>
                        <p className="text-xs text-blue-200 dark:text-gray-400">Made with ❤️ for better financial management</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</Link>
                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- Main App Component ---
function App() {
    // Theme State
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('s3-theme');
        return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    // Budget Data State (shared between Budget and Savings pages)
    const [budgetPlan, setBudgetPlan] = useState(null);

    // Effect to apply theme class and save to localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('s3-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Router>
                <div className={`flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans`}>
                    <Header />
                    <main className="container mx-auto px-4 py-8 max-w-6xl flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/budget" element={<BudgetPage budgetPlan={budgetPlan} setBudgetPlan={setBudgetPlan} />} />
                            <Route path="/savings" element={<SavingsPage budgetPlan={budgetPlan} />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/privacy" element={<PrivacyPolicy />} />
                            <Route path="*" element={
                                <div className="text-center py-10">
                                    <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                                    <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Go back home</Link>
                                </div>
                            } />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;