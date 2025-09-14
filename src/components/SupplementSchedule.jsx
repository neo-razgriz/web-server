import React from 'react';
import './SupplementSchedule.css'; // We will create this file next

// --- DATA ---
// Data is stored in arrays of objects, making it easy to manage.

const dailyScheduleData = [
  {
    id: 1,
    time: 'Upon Waking',
    when: 'Empty Stomach (before breakfast)',
    supplement: 'Rhodiola Rosea (200-400 mg)',
    rationale: 'Provides anti-fatigue benefits. Works best on an empty stomach. (Cycle this).',
  },
  {
    id: 2,
    time: 'Upon Waking',
    when: 'Empty Stomach (before breakfast)',
    supplement: 'NAC (600 mg)',
    rationale: 'Better absorption on an empty stomach for antioxidant support.',
  },
  {
    id: 3,
    time: 'Morning',
    when: 'With Breakfast (needs fat)',
    supplement: 'Omega-3 (1-2 g EPA/DHA)',
    rationale: 'Fat-soluble; requires dietary fat for proper absorption.',
  },
  {
    id: 4,
    time: 'Morning',
    when: 'With Breakfast (needs fat)',
    supplement: 'CoQ10 (Ubiquinol) (100-200 mg)',
    rationale: 'Fat-soluble; supports cellular energy for the day.',
  },
  {
    id: 5,
    time: 'Morning',
    when: 'With Breakfast',
    supplement: 'Phosphatidylserine (100 mg)',
    rationale: 'Supports cognition and is best taken with a meal.',
  },
  {
    id: 6,
    time: 'Morning',
    when: 'With Breakfast',
    supplement: 'Ginkgo Biloba (120 mg)',
    rationale: 'Best absorbed with food.',
  },
  {
    id: 7,
    time: 'Evening',
    when: '1 Hour Before Bed',
    supplement: 'Magnesium Citrate (200-400 mg)',
    rationale: 'Promotes muscle relaxation and calms the nervous system for sleep.',
  },
  {
    id: 8,
    time: 'Evening',
    when: '1 Hour Before Bed',
    supplement: 'Ashwagandha (300-600 mg)',
    rationale: 'Lowers cortisol and reduces stress from the day. (Cycle this).',
  },
];

const situationalCocktailsData = [
  {
    id: 'sit1',
    title: '1. Deep Analytic Thought & Debugging',
    ingredients: [
      'Alpha-GPC (300-500 mg)',
      'L-Theanine (100 mg)',
      'Phosphatidylserine (100 mg)',
    ],
    rationale:
      'This stack provides the raw material for focus (Alpha-GPC), prevents the frustration/anxiety of getting stuck (L-Theanine), and keeps your stress response low so you can think clearly (PS).',
  },
  {
    id: 'sit2',
    title: '2. High-Stress Deadline Day',
    ingredients: ['L-Theanine (200 mg)', 'Ashwagandha (300 mg)'],
    rationale:
      'This combination provides immediate, non-drowsy calm (L-Theanine) while also managing the underlying cortisol spike from the stress (Ashwagandha), keeping you resilient.',
  },
  {
    id: 'sit3',
    title: '3. Collaborative & Creative Brainstorming',
    ingredients: ['L-Theanine (200 mg)', 'Ginkgo Biloba (120 mg)'],
    rationale:
      'L-Theanine reduces social anxiety and promotes an open, creative state. Ginkgo supports cerebral blood flow, which may aid verbal fluency and connecting ideas quickly—perfect for teamwork.',
  },
];

// --- COMPONENT ---
// This component renders the data using .map() to create the UI elements.

const SupplementSchedule = () => {
  return (
    <div className="schedule-container">
      <h1>Your Supplement Schedule</h1>

      <p className="disclaimer">
        <strong>Disclaimer:</strong> This information is for educational purposes only.
        Please consult with your physician before implementing this or any new
        supplement routine.
      </p>

      <h2>Daily Supplement Schedule</h2>
      <p>Your foundational stack for consistent daily use (with cycling as noted).</p>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time of Day</th>
            <th>When (Relative to Meal)</th>
            <th>Supplement &amp; Rationale</th>
          </tr>
        </thead>
        <tbody>
          {/* We map over the data array to generate a <tr> for each item */}
          {dailyScheduleData.map((item) => (
            <tr key={item.id}>
              <td data-label="Time">
                <strong>{item.time}</strong>
              </td>
              <td data-label="When">
                <strong>{item.when}</strong>
              </td>
              <td data-label="Supplement">
                <strong>{item.supplement}</strong>
                <div className="rationale">{item.rationale}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Situational Cocktails (As-Needed)</h2>
      <p>Use these combinations 30-45 minutes <em>before</em> the specific challenge.</p>

      <div className="cocktails-grid">
        {/* We map over the cocktail data to generate a "card" for each situation */}
        {situationalCocktailsData.map((cocktail) => (
          <div className="situation-card" key={cocktail.id}>
            <h3>{cocktail.title}</h3>
            <h4>Cocktail:</h4>
            <ul>
              {/* We do a nested map for the list of ingredients */}
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Rationale:</h4>
            <p>{cocktail.rationale}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplementSchedule;