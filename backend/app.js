document.addEventListener('DOMContentLoaded', function() {
  // Sample data - replace with real data from your backend
  const healthData = {
      heartRate: 72,
      bloodPressure: "120/80",
      oxygenLevel: 98,
      activityData: [65, 59, 80, 81, 56, 55, 40],
      reminders: [
          { medication: "Vitamin D", time: "08:00 AM" },
          { medication: "Blood Pressure Meds", time: "12:00 PM" },
          { medication: "Pain Reliever", time: "06:00 PM" }
      ],
      appointments: [
          { doctor: "Dr. Smith", date: "Tomorrow, 10:00 AM", type: "Checkup" },
          { doctor: "Dr. Johnson", date: "July 30, 2:30 PM", type: "Follow-up" }
      ]
  };

  // Update vital stats
  document.getElementById('heart-rate').textContent = healthData.heartRate;
  document.getElementById('blood-pressure').textContent = healthData.bloodPressure;
  document.getElementById('oxygen-level').textContent = `${healthData.oxygenLevel}%`;

  // Populate reminders
  const remindersList = document.getElementById('reminders');
  healthData.reminders.forEach(reminder => {
      const li = document.createElement('li');
      li.innerHTML = `
          <span class="medication">${reminder.medication}</span>
          <span class="time">${reminder.time}</span>
      `;
      remindersList.appendChild(li);
  });

  // Populate appointments
  const appointmentsList = document.getElementById('appointments');
  healthData.appointments.forEach(appointment => {
      const div = document.createElement('div');
      div.className = 'appointment-item';
      div.innerHTML = `
          <h3>${appointment.doctor}</h3>
          <p>${appointment.date}</p>
          <span class="appointment-type">${appointment.type}</span>
      `;
      appointmentsList.appendChild(div);
  });

  // Create activity chart
  const ctx = document.getElementById('activity-chart').getContext('2d');
  new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
              label: 'Daily Activity Level',
              data: healthData.activityData,
              backgroundColor: 'rgba(79, 195, 247, 0.2)',
              borderColor: 'rgba(79, 195, 247, 1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Simulate real-time updates (replace with actual WebSocket or API calls)
  setInterval(() => {
      const randomChange = Math.floor(Math.random() * 5) - 2; // -2 to +2
      const newHeartRate = Math.max(60, Math.min(100, healthData.heartRate + randomChange));
      document.getElementById('heart-rate').textContent = newHeartRate;
      
      // Add animation for changes
      const hrElement = document.getElementById('heart-rate');
      hrElement.style.color = newHeartRate > healthData.heartRate ? 'var(--danger-color)' : 'var(--success-color)';
      setTimeout(() => {
          hrElement.style.color = 'var(--secondary-color)';
      }, 1000);
      
      healthData.heartRate = newHeartRate;
  }, 5000);
});