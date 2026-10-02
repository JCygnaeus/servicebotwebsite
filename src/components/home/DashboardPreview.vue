<template>
  <section class="section dashboard-section">
    <div class="container">
      <div class="dashboard-head">
        <div class="section-head">
          <span class="eyebrow">The dashboard</span>
          <h2 class="section-title">One inbox for every property</h2>
          <p>
            See open cases, priorities and conversations in one place. Step into any chat when a
            human touch is needed.
          </p>
        </div>
        <router-link :to="{ path: '/', hash: '#demo' }" class="btn btn-highlight">See it live</router-link>
      </div>

      <div class="dashboard-mock" role="img" aria-label="Preview of the case inbox in the Servicebot dashboard">
        <div class="dashboard-sidebar">
          <span class="dashboard-sidebar-brand">Servicebot</span>
          <span
            v-for="item in sidebar"
            :key="item"
            class="dashboard-sidebar-item"
            :class="{ active: item === 'Inbox' }"
          >
            {{ item }}
          </span>
        </div>

        <div class="dashboard-main">
          <div class="dashboard-stats">
            <div v-for="stat in stats" :key="stat.label" class="dashboard-stat">
              <div class="dashboard-stat-label">{{ stat.label }}</div>
              <div class="dashboard-stat-value">{{ stat.value }}</div>
            </div>
          </div>

          <div class="dashboard-table-wrap">
            <div class="dashboard-table">
              <div class="dashboard-row dashboard-row-head">
                <span>Case</span><span>Issue</span><span>Location</span><span>Priority</span><span>Status</span>
              </div>
              <div v-for="row in cases" :key="row.id" class="dashboard-row">
                <span>#{{ row.id }}</span>
                <span>{{ row.issue }}</span>
                <span>{{ row.location }}</span>
                <span class="dashboard-pill" :class="{ high: row.priority === 'High' }">{{ row.priority }}</span>
                <span>{{ row.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'DashboardPreview',
  data() {
    return {
      sidebar: ['Inbox', 'Properties', 'QR codes', 'Contractors', 'Insights'],
      stats: [
        { label: 'Open cases', value: '[XX]' },
        { label: 'Urgent', value: '[X]' },
        { label: 'Avg. first response', value: '[X s]' },
        { label: 'Resolved this week', value: '[XX]' }
      ],
      cases: [
        { id: 1042, issue: 'Washing machine leaking', location: 'Elm Court 12 · Laundry', priority: 'High', status: 'Assigned' },
        { id: 1041, issue: 'Stairwell light out, floor 3', location: 'Elm Court 8 · Stairwell B', priority: 'Normal', status: 'New' },
        { id: 1040, issue: 'Radiator cold in bedroom', location: 'Oak Street 3 · Apt 1102', priority: 'High', status: 'Booked' },
        { id: 1039, issue: "Garage door won't close", location: 'Elm Court 12 · Garage', priority: 'Normal', status: 'Resolved' }
      ]
    }
  }
}
</script>

<style>
.dashboard-section {
  background-color: var(--color-primary);
  color: #fff;
}

.dashboard-section .eyebrow {
  color: var(--color-highlight);
}

.dashboard-section .section-title {
  color: #fff;
}

.dashboard-section .section-head p {
  color: var(--color-on-primary-muted);
}

.dashboard-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
}

.dashboard-head .section-head {
  margin-bottom: 0;
}

.dashboard-mock {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: var(--radius-card);
  background-color: var(--color-surface);
  color: var(--color-ink);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}

.dashboard-sidebar {
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  font-size: 14px;
}

.dashboard-sidebar-brand {
  font-weight: 700;
  padding: 8px 10px;
}

.dashboard-sidebar-item {
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--color-muted);
}

.dashboard-sidebar-item.active {
  background-color: #eef5e0;
  color: var(--color-ink);
  font-weight: 700;
}

.dashboard-main {
  flex: 1 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.dashboard-stat {
  border: 1px solid var(--color-line);
  border-radius: 12px;
  padding: 14px;
}

.dashboard-stat-label {
  font-size: 12px;
  color: var(--color-muted);
}

.dashboard-stat-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
}

.dashboard-table-wrap {
  border: 1px solid var(--color-line);
  border-radius: 12px;
  overflow-x: auto;
}

.dashboard-table {
  min-width: 620px;
  font-size: 14px;
}

.dashboard-row {
  display: grid;
  grid-template-columns: 70px 2fr 1.5fr 90px 90px;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border-top: 1px solid var(--color-line);
}

.dashboard-row-head {
  border-top: none;
  padding: 10px 14px;
  background-color: var(--color-bg);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-muted);
}

.dashboard-pill {
  justify-self: start;
  padding: 3px 8px;
  border-radius: 999px;
  background-color: #e6e3da;
  font-size: 12px;
  font-weight: 700;
}

.dashboard-pill.high {
  background-color: #fde2cf;
  color: #7a2e05;
}

@media (max-width: 768px) {
  .dashboard-sidebar {
    display: none;
  }
}
</style>
