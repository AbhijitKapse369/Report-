// Dashboard Data
const dashboardData = {
  executive_recommendations: [
    {
      title: "Financial Model Refinement",
      description: "Revise 5-year projections with realistic assumptions",
      priority: "Critical"
    },
    {
      title: "Compliance Monitoring", 
      description: "Implement formal visa requirement monitoring",
      priority: "Critical"
    },
    {
      title: "Team Strengthening",
      description: "Identify co-founder or formal advisors", 
      priority: "Important"
    }
  ],
  financial_projections: [
    { year: 1, customers: 13, revenue: 23064, net_profit: 869, profit_margin: 3.8, cac: 385, ltv: 2000, gross_margin: 49 },
    { year: 2, customers: 50, revenue: 57813, net_profit: 2840, profit_margin: 4.9, cac: 122, ltv: 2000, gross_margin: 49 },
    { year: 3, customers: 219, revenue: 125529, net_profit: 4713, profit_margin: 3.8, cac: null, ltv: 2000, gross_margin: 49 },
    { year: 4, customers: 562, revenue: 251361, net_profit: 8556, profit_margin: 3.4, cac: 10, ltv: 2100, gross_margin: 49 },
    { year: 5, customers: 1252, revenue: 505236, net_profit: 19419, profit_margin: 3.8, cac: 6, ltv: 2100, gross_margin: 51 }
  ],
  
  competitors: [
    {
      type: "Traditional Market Research",
      cost: "£10k-50k per project",
      limitations: "Very high cost; takes weeks/months",
      edge: "Much faster (24h) and ~90% cheaper"
    },
    {
      type: "Social Listening Tools",
      cost: "£800-1000+ per month",
      limitations: "Expensive; requires expert interpretation",
      edge: "Focused on intent, not just volume; startup-tailored analysis"
    },
    {
      type: "Online Survey Platforms",
      cost: "£30-100 per month",
      limitations: "Small sample sizes; manual interpretation",
      edge: "Uses massive existing datasets; AI analysis finds insights automatically"
    },
    {
      type: "Niche Validation Tools",
      cost: "Free-£150/month",
      limitations: "Limited scope/accuracy",
      edge: "Real market signals, comprehensive reports, investor network"
    },
    {
      type: "Do-It-Yourself Methods",
      cost: "Low monetary cost",
      limitations: "Time-consuming; potential bias",
      edge: "Drastically reduces time; provides unbiased, data-driven results"
    }
  ],
  
  risks: [
    { category: "Market Adoption", level: 3, impact: 4, mitigation: "Moderate" },
    { category: "Competition", level: 4, impact: 5, mitigation: "Planned" },
    { category: "Technical Accuracy", level: 2, impact: 4, mitigation: "Active" },
    { category: "Platform Dependency", level: 4, impact: 3, mitigation: "Moderate" },
    { category: "Team/Founder Risk", level: 5, impact: 5, mitigation: "Planned" },
    { category: "Scaling Costs", level: 3, impact: 3, mitigation: "Active" },
    { category: "Data Privacy", level: 2, impact: 3, mitigation: "Active" }
  ],
  
  gtm_channels: [
    { channel: "Content Marketing", priority: 1, cac: 50, conversion_rate: 5 },
    { channel: "Community Engagement", priority: 1, cac: 75, conversion_rate: 8 },
    { channel: "Referrals", priority: 2, cac: 30, conversion_rate: 15 },
    { channel: "Partnerships", priority: 2, cac: 100, conversion_rate: 12 },
    { channel: "Paid Advertising", priority: 3, cac: 200, conversion_rate: 3 },
    { channel: "Free Preview", priority: 1, cac: 25, conversion_rate: 10 }
  ],
  
  market_segments: [
    { segment: "Solo Founders", size: 8000, arpu: 147, addressable: 15 },
    { segment: "Small Teams", size: 3000, arpu: 300, addressable: 20 },
    { segment: "Accelerators", size: 150, arpu: 1500, addressable: 40 },
    { segment: "Innovation Consultancies", size: 200, arpu: 2000, addressable: 30 },
    { segment: "Corporate Innovation", size: 100, arpu: 3000, addressable: 10 }
  ],
  
  recommendations: [
    {
      title: "Financial Model Refinement",
      priority: "High",
      description: "Revise 5-year financial projections with realistic assumptions",
      timeline: "2-3 weeks",
      status: "Critical"
    },
    {
      title: "Innovation Proof Pack",
      priority: "High",
      description: "Create competitor matrix, USP documentation, and user testimonials",
      timeline: "3-4 weeks",
      status: "Critical"
    },
    {
      title: "Growth & Hiring Roadmap",
      priority: "Medium",
      description: "Develop detailed 36-month growth and team expansion plan",
      timeline: "2-3 weeks",
      status: "Important"
    },
    {
      title: "Compliance Plan",
      priority: "High",
      description: "Implement formal monitoring plan for visa requirements",
      timeline: "1-2 weeks",
      status: "Critical"
    },
    {
      title: "Team Strengthening",
      priority: "Medium",
      description: "Identify co-founder or formal advisors to reduce single-founder risk",
      timeline: "4-8 weeks",
      status: "Important"
    }
  ]
};

// Chart colors
const chartColors = {
  primary: '#218088',
  secondary: '#FFC185',
  success: '#218088',
  warning: '#A84B2F',
  error: '#C0152F',
  fills: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
};

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeCharts();
  populateTables();
  populateCompetitorCards();
  populateRiskList();
  populateChannelList();
  populateMarketSegments();
  populateRecommendations();
  populateExecutiveRecommendations();
});

function initializeNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all buttons and tabs
      navButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked button and corresponding tab
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      
      // Refresh charts when switching tabs
      setTimeout(() => {
        refreshChartsInActiveTab(targetTab);
      }, 150);
    });
  });
}

function initializeCharts() {
  createRevenueChart();
  createCustomerChart();
  createProfitChart();
  createUnitEconomicsChart();
  createRiskChart();
  createRiskScoresChart();
  createMitigationChart();
  createChannelChart();
  createMarketChart();
}

function createRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  new Chart(canvas, {
    type: 'line',
    data: {
      labels: dashboardData.financial_projections.map(item => `Y${item.year}`),
      datasets: [{
        label: 'Revenue',
        data: dashboardData.financial_projections.map(item => item.revenue),
        borderColor: chartColors.primary,
        backgroundColor: chartColors.primary + '20',
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          display: true,
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          beginAtZero: true,
          display: true,
          ticks: {
            font: { size: 10 },
            callback: function(value) {
              return '£' + (value / 1000).toFixed(0) + 'K';
            }
          }
        }
      }
    }
  });
}

function createCustomerChart() {
  const ctx = document.getElementById('customerChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: dashboardData.financial_projections.map(item => `Y${item.year}`),
      datasets: [{
        label: 'Customers',
        data: dashboardData.financial_projections.map(item => item.customers),
        backgroundColor: chartColors.secondary + '80',
        borderColor: chartColors.secondary,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          display: true,
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          beginAtZero: true,
          display: true,
          ticks: {
            font: { size: 10 }
          }
        }
      }
    }
  });
}

function createProfitChart() {
  const ctx = document.getElementById('profitChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  new Chart(canvas, {
    type: 'line',
    data: {
      labels: dashboardData.financial_projections.map(item => `Y${item.year}`),
      datasets: [{
        label: 'Profit Margin',
        data: dashboardData.financial_projections.map(item => item.profit_margin),
        borderColor: chartColors.success,
        backgroundColor: chartColors.success + '20',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          display: true,
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          beginAtZero: true,
          display: true,
          ticks: {
            font: { size: 10 },
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
}

function createUnitEconomicsChart() {
  const ctx = document.getElementById('unitEconomicsChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  // Filter out null CAC values
  const validData = dashboardData.financial_projections.filter(item => item.cac !== null);
  
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: validData.map(item => `Y${item.year}`),
      datasets: [{
        label: 'CAC',
        data: validData.map(item => item.cac),
        backgroundColor: chartColors.error + '80',
        borderColor: chartColors.error,
        borderWidth: 1
      }, {
        label: 'LTV',
        data: validData.map(item => item.ltv),
        backgroundColor: chartColors.success + '80',
        borderColor: chartColors.success,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { size: 10 }
          }
        }
      },
      scales: {
        x: {
          display: true,
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          beginAtZero: true,
          display: true,
          ticks: {
            font: { size: 10 },
            callback: function(value) {
              return '£' + value;
            }
          }
        }
      }
    }
  });
}

function createRiskChart() {
  const ctx = document.getElementById('riskChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  new Chart(canvas, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Risks',
        data: dashboardData.risks.map(risk => ({ x: risk.level, y: risk.impact })),
        backgroundColor: dashboardData.risks.map((risk, index) => 
          chartColors.fills[index % chartColors.fills.length] + '80'
        ),
        borderColor: dashboardData.risks.map((risk, index) => 
          chartColors.fills[index % chartColors.fills.length]
        ),
        borderWidth: 1,
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Probability',
            font: { size: 10 }
          },
          min: 0,
          max: 6,
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Impact',
            font: { size: 10 }
          },
          min: 0,
          max: 6,
          ticks: {
            font: { size: 10 }
          }
        }
      }
    }
  });
}

function createRiskScoresChart() {
  const ctx = document.getElementById('riskScoresChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  // Calculate risk scores (probability × impact)
  const riskScores = dashboardData.risks.map(risk => risk.level * risk.impact);
  const riskLabels = dashboardData.risks.map(risk => risk.category.split(' ')[0] + ' Risk');
  
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: riskLabels,
      datasets: [{
        label: 'Risk Score',
        data: riskScores,
        backgroundColor: riskScores.map(score => 
          score >= 20 ? chartColors.error + '80' : 
          score >= 12 ? chartColors.warning + '80' : 
          chartColors.success + '80'
        ),
        borderColor: riskScores.map(score => 
          score >= 20 ? chartColors.error : 
          score >= 12 ? chartColors.warning : 
          chartColors.success
        ),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          ticks: {
            font: { size: 10 }
          }
        }
      }
    }
  });
}

function createMitigationChart() {
  const ctx = document.getElementById('mitigationChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  // Count mitigation status
  const statusCounts = {};
  dashboardData.risks.forEach(risk => {
    statusCounts[risk.mitigation] = (statusCounts[risk.mitigation] || 0) + 1;
  });
  
  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: [
          chartColors.success + '80',
          chartColors.warning + '80', 
          chartColors.error + '80',
          chartColors.primary + '80'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 10 }
          }
        }
      }
    }
  });
}

function createChannelChart() {
  const ctx = document.getElementById('channelChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  new Chart(canvas, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Marketing Channels',
        data: dashboardData.gtm_channels.map(channel => ({
          x: channel.conversion_rate,
          y: channel.cac,
          r: (4 - channel.priority) * 3 + 4
        })),
        backgroundColor: chartColors.fills.slice(0, dashboardData.gtm_channels.length).map(color => color + '60'),
        borderColor: chartColors.fills.slice(0, dashboardData.gtm_channels.length),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const channelIndex = context.dataIndex;
              const channel = dashboardData.gtm_channels[channelIndex];
              return `${channel.channel}: ${channel.conversion_rate}% conversion, £${channel.cac} CAC`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Conversion %',
            font: { size: 10 }
          },
          ticks: {
            font: { size: 10 }
          }
        },
        y: {
          title: {
            display: true,
            text: 'CAC (£)',
            font: { size: 10 }
          },
          ticks: {
            font: { size: 10 }
          }
        }
      }
    }
  });
}

function createMarketChart() {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;
  
  const canvas = ctx.getContext('2d');
  
  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: dashboardData.market_segments.map(segment => segment.segment.split(' ')[0]),
      datasets: [{
        label: 'Market Size',
        data: dashboardData.market_segments.map(segment => segment.size * (segment.addressable / 100)),
        backgroundColor: chartColors.fills.slice(0, dashboardData.market_segments.length),
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 10 }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const segment = dashboardData.market_segments[context.dataIndex];
              const addressableSize = Math.round(segment.size * (segment.addressable / 100));
              return `${segment.segment}: ${addressableSize} companies`;
            }
          }
        }
      }
    }
  });
}

function populateTables() {
  const financialTableBody = document.getElementById('financialTableBody');
  if (!financialTableBody) return;
  
  financialTableBody.innerHTML = dashboardData.financial_projections.map(item => `
    <tr>
      <td>${item.year}</td>
      <td>${item.customers.toLocaleString()}</td>
      <td>£${item.revenue.toLocaleString()}</td>
      <td>£${item.net_profit.toLocaleString()}</td>
      <td>${item.profit_margin}%</td>
      <td>${item.cac ? '£' + item.cac.toLocaleString() : 'N/A'}</td>
      <td>£${item.ltv.toLocaleString()}</td>
    </tr>
  `).join('');
}

function populateCompetitorCards() {
  const competitorCards = document.getElementById('competitorCards');
  if (!competitorCards) return;
  
  competitorCards.innerHTML = dashboardData.competitors.map(competitor => `
    <div class="competitor-card">
      <div class="competitor-type">${competitor.type}</div>
      <div class="competitor-cost">${competitor.cost}</div>
      <div class="competitor-limitations">${competitor.limitations}</div>
      <div class="competitor-edge">Our Edge: ${competitor.edge}</div>
    </div>
  `).join('');
}

function populateRiskList() {
  const riskList = document.getElementById('riskList');
  if (!riskList) return;
  
  riskList.innerHTML = dashboardData.risks.map(risk => {
    const riskClass = risk.level >= 4 ? 'high' : risk.level >= 3 ? 'medium' : 'low';
    return `
      <div class="risk-item ${riskClass}">
        <div>
          <div class="risk-category">${risk.category}</div>
          <div>Impact: ${risk.impact}/5 | Mitigation: ${risk.mitigation}</div>
        </div>
        <div class="risk-level">Level ${risk.level}</div>
      </div>
    `;
  }).join('');
}

function populateChannelList() {
  const channelList = document.getElementById('channelList');
  if (!channelList) return;
  
  channelList.innerHTML = dashboardData.gtm_channels.map(channel => `
    <div class="channel-item">
      <div class="channel-info">
        <div class="channel-name">${channel.channel}</div>
        <div class="channel-metrics">CAC: £${channel.cac} | Conversion: ${channel.conversion_rate}%</div>
      </div>
      <div class="priority-badge priority-${channel.priority}">Priority ${channel.priority}</div>
    </div>
  `).join('');
}

function populateMarketSegments() {
  const marketSegments = document.getElementById('marketSegments');
  if (!marketSegments) return;
  
  marketSegments.innerHTML = dashboardData.market_segments.map(segment => {
    const addressableSize = Math.round(segment.size * (segment.addressable / 100));
    const revenueOpportunity = addressableSize * segment.arpu;
    
    return `
      <div class="segment-item">
        <div class="segment-name">${segment.segment}</div>
        <div class="segment-metrics">
          <div class="segment-metric">
            <span class="segment-value">${addressableSize}</span>
            <span class="segment-label">Addressable</span>
          </div>
          <div class="segment-metric">
            <span class="segment-value">£${segment.arpu}</span>
            <span class="segment-label">ARPU</span>
          </div>
          <div class="segment-metric">
            <span class="segment-value">£${(revenueOpportunity / 1000).toFixed(0)}K</span>
            <span class="segment-label">Opportunity</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function populateRecommendations() {
  const recommendationsGrid = document.getElementById('recommendationsGrid');
  if (!recommendationsGrid) return;
  
  recommendationsGrid.innerHTML = dashboardData.recommendations.map(rec => `
    <div class="recommendation-card ${rec.status.toLowerCase()}">
      <div class="recommendation-title">
        ${rec.title}
        <span class="priority-${rec.priority.toLowerCase()}">${rec.priority}</span>
      </div>
      <div class="recommendation-description">${rec.description}</div>
      <div class="recommendation-timeline">Timeline: ${rec.timeline}</div>
    </div>
  `).join('');
}

function populateExecutiveRecommendations() {
  const executiveRecs = document.getElementById('executiveRecommendations');
  if (!executiveRecs) return;
  
  executiveRecs.innerHTML = dashboardData.executive_recommendations.map(rec => `
    <div class="recommendation-summary-item">
      <div class="recommendation-summary-title">${rec.title}</div>
      <div class="recommendation-summary-desc">${rec.description}</div>
    </div>
  `).join('');
}

function showAllRecommendations() {
  // Switch to recommendations tab (if it existed)
  alert('Navigate through the dashboard to see detailed financial projections, risk assessments, and market analysis that support these recommendations.');
}

function refreshChartsInActiveTab(tabId) {
  // Refresh all charts for proper sizing
  const charts = [];
  
  // Get all chart instances
  for (let id in Chart.instances) {
    if (Chart.instances[id]) {
      charts.push(Chart.instances[id]);
    }
  }
  
  // Resize all charts
  charts.forEach(chart => {
    if (chart && typeof chart.resize === 'function') {
      chart.resize();
      chart.update('none'); // Update without animation for faster performance
    }
  });
  
  console.log(`Switched to ${tabId} tab - refreshed ${charts.length} charts`);
}

// Utility functions for interactivity
function exportData(format) {
  // Placeholder for data export functionality
  alert(`Export to ${format} functionality would be implemented here`);
}

function printSection() {
  window.print();
}

// Debug function to check section visibility
function checkSectionVisibility() {
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(section => {
    const isVisible = section.classList.contains('active');
    console.log(`Section ${section.id}: ${isVisible ? 'visible' : 'hidden'}`);
  });
}

// Ensure all navigation works properly
function ensureNavigationWorks() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  console.log(`Found ${navButtons.length} navigation buttons`);
  console.log(`Found ${tabContents.length} tab contents`);
  
  // Check if all required sections exist
  const requiredTabs = ['executive', 'financial', 'metrics', 'competitive', 'risk', 'gtm', 'market', 'operational'];
  requiredTabs.forEach(tabId => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      console.log(`✓ Section ${tabId} exists`);
    } else {
      console.error(`✗ Section ${tabId} is missing`);
    }
  });
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to metric cards
  const metricCards = document.querySelectorAll('.metric-card');
  metricCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });
  
  // Add smooth transitions
  const style = document.createElement('style');
  style.textContent = `
    .metric-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card:hover {
      transform: translateY(-1px);
    }
    
    .tab-content {
      animation: fadeIn 0.3s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
  
  // Run diagnostics
  setTimeout(() => {
    ensureNavigationWorks();
    checkSectionVisibility();
  }, 500);
});

// Add window load event to ensure everything is ready
window.addEventListener('load', function() {
  console.log('Dashboard fully loaded');
  
  // Double-check that all sections are properly initialized
  const activeTab = document.querySelector('.tab-content.active');
  if (activeTab) {
    console.log(`Active tab: ${activeTab.id}`);
  } else {
    console.error('No active tab found - fixing...');
    const firstTab = document.getElementById('executive');
    if (firstTab) {
      firstTab.classList.add('active');
    }
  }
});
