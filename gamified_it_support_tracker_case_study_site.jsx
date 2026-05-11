export default function GamifiedITSupportTrackerCaseStudy() {
  const codeBlockStyle = "bg-gray-100 border border-gray-200 rounded-2xl p-4 overflow-x-auto text-sm text-gray-800 leading-6";

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="border-b border-gray-200 pb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4">
            ServiceNow Case Study
          </p>
          <h1 className="text-5xl font-semibold tracking-tight leading-tight max-w-4xl">
            Gamified IT Support Tracker
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-8">
            A ServiceNow application for incident-based point allocation, SLA tracking,
            reward automation, and agent performance visibility.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-3xl p-6 bg-gray-50">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">Platform</p>
            <h3 className="text-2xl font-medium">ServiceNow</h3>
          </div>

          <div className="border border-gray-200 rounded-3xl p-6 bg-gray-50">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">Modules</p>
            <h3 className="text-2xl font-medium">Incident Management</h3>
          </div>

          <div className="border border-gray-200 rounded-3xl p-6 bg-gray-50">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">Focus</p>
            <h3 className="text-2xl font-medium">Gamification Workflow</h3>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Abstract</h2>
            <p className="text-gray-700 leading-8 text-lg">
              The Gamified IT Support Tracker is a custom ServiceNow application designed
              to integrate gamification into incident management workflows. The system
              awards points to support agents based on incident priority and SLA
              compliance, and assigns badge levels including Bronze, Silver, Gold, and
              Platinum according to accumulated scores.
            </p>
            <p className="text-gray-700 leading-8 text-lg mt-6">
              The application uses Business Rules, GlideRecord operations, scratchpad
              data loading, and dashboard reporting to automate rewards and provide
              visibility into support performance metrics.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 bg-gray-50 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Badge Levels
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Bronze</span>
                  <span>0 – 99</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Silver</span>
                  <span>100 – 199</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Gold</span>
                  <span>200 – 299</span>
                </div>
                <div className="flex justify-between">
                  <span>Platinum</span>
                  <span>300+</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Incident Priority Points
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Priority 1</span>
                  <span>50</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Priority 2</span>
                  <span>35</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Priority 3</span>
                  <span>20</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Priority 4</span>
                  <span>10</span>
                </div>
                <div className="flex justify-between">
                  <span>Priority 5</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8">Architecture Overview</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-3xl p-6">
              <div className="text-4xl mb-4">1</div>
              <h3 className="text-xl font-medium mb-3">Incident Closure</h3>
              <p className="text-gray-600 leading-7">
                Incident state changes to Closed in the Incident table.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6">
              <div className="text-4xl mb-4">2</div>
              <h3 className="text-xl font-medium mb-3">Reward Calculation</h3>
              <p className="text-gray-600 leading-7">
                Business Rules evaluate priority levels and SLA completion data.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6">
              <div className="text-4xl mb-4">3</div>
              <h3 className="text-xl font-medium mb-3">Reward Storage</h3>
              <p className="text-gray-600 leading-7">
                Points and badge data are updated in the custom rewards table.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6">
              <div className="text-4xl mb-4">4</div>
              <h3 className="text-xl font-medium mb-3">UI Feedback</h3>
              <p className="text-gray-600 leading-7">
                Agent badge and score information is displayed on the Incident form.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Business Rule — Award Points on Incident Closure</h2>
            <div className={codeBlockStyle}>
              <pre>{`(function executeRule(current, previous) {

  if (!(current.state.changesTo('7') && !current.u_points_awarded))
    return;

  if (!current.assigned_to)
    return;

  var pointsMap = {
    '1': 50,
    '2': 35,
    '3': 20,
    '4': 10,
    '5': 5
  };

  var points = pointsMap[String(current.priority)] || 0;

  var slaBonus = 0;

  var ts = new GlideRecord('task_sla');
  ts.addQuery('task', current.sys_id);
  ts.addQuery('stage', 'completed');
  ts.addQuery('has_breached', false);
  ts.query();

  if (ts.next())
    slaBonus = 10;

  var total = points + slaBonus;

  var gr = new GlideRecord('u_agent_rewards');
  gr.addQuery('u_agent', current.assigned_to);
  gr.query();

  if (gr.next()) {
    var newTotal = (parseInt(gr.u_points, 10) || 0) + total;

    gr.u_points = newTotal;
    gr.u_badge = getBadge(newTotal);
    gr.update();
  } else {
    gr.initialize();
    gr.u_agent = current.assigned_to;
    gr.u_points = total;
    gr.u_badge = getBadge(total);
    gr.insert();
  }

  current.u_points_awarded = true;
  current.update();

  function getBadge(score) {
    if (score >= 300)
      return 'Platinum';

    if (score >= 200)
      return 'Gold';

    if (score >= 100)
      return 'Silver';

    return 'Bronze';
  }

})(current, previous);`}</pre>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Business Rule — Load Rewards to Scratchpad</h2>
            <div className={codeBlockStyle}>
              <pre>{`(function executeRule(current, g_scratchpad) {

  g_scratchpad.badge = '';
  g_scratchpad.points = 0;

  if (!current.assigned_to)
    return;

  var r = new GlideRecord('u_agent_rewards');
  r.addQuery('agent', current.assigned_to);
  r.setLimit(1);
  r.query();

  if (r.next()) {
    g_scratchpad.badge = r.badge + '';
    g_scratchpad.points = parseInt(r.points, 10) || 0;
  }

})(current, g_scratchpad);`}</pre>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Client Script — Display Badge Information</h2>
            <div className={codeBlockStyle}>
              <pre>{`function onLoad() {

  if (g_scratchpad.badge) {

    g_form.addInfoMessage(
      'Agent Badge: ' + g_scratchpad.badge +
      ' | Points: ' + g_scratchpad.points
    );
  }
}`}</pre>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <div className="border border-gray-200 rounded-3xl p-8 bg-gray-50">
            <h2 className="text-3xl font-semibold mb-6">Core Components</h2>

            <ul className="space-y-4 text-lg text-gray-700 leading-8">
              <li>• Incident Management Table</li>
              <li>• Custom Rewards Table</li>
              <li>• Business Rules</li>
              <li>• GlideRecord Operations</li>
              <li>• SLA Evaluation Logic</li>
              <li>• Client Scripts</li>
              <li>• Dashboard Reporting</li>
              <li>• Badge Assignment Engine</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 bg-gray-50">
            <h2 className="text-3xl font-semibold mb-6">System Outcomes</h2>

            <ul className="space-y-4 text-lg text-gray-700 leading-8">
              <li>• Automated reward distribution</li>
              <li>• SLA-based scoring</li>
              <li>• Incident priority evaluation</li>
              <li>• Badge progression tracking</li>
              <li>• Agent performance visibility</li>
              <li>• Dashboard leaderboard integration</li>
              <li>• Form-level performance insights</li>
              <li>• Reduced manual tracking processes</li>
            </ul>
          </div>
        </section>

        <section className="border border-gray-200 rounded-3xl p-10">
          <h2 className="text-3xl font-semibold mb-6">Database Structure</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 text-gray-500 font-medium">Table</th>
                  <th className="py-4 text-gray-500 font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-5 font-medium">incident</td>
                  <td className="py-5 text-gray-600">Stores incident records and assignment data</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-5 font-medium">task_sla</td>
                  <td className="py-5 text-gray-600">Tracks SLA completion and breach status</td>
                </tr>
                <tr>
                  <td className="py-5 font-medium">u_agent_rewards</td>
                  <td className="py-5 text-gray-600">Stores agent points and badge levels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-sm">
          <p>Gamified IT Support Tracker — ServiceNow Case Study</p>
          <p>Business Rules • GlideRecord • Incident Management • SLA Tracking</p>
        </footer>
      </div>
    </div>
  );
}
