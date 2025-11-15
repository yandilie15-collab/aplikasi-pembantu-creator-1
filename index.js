import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">CreatorBoost.Web</h1>
          <nav className="space-x-4">
            <Link href="/ideas"><a className="text-sm">Ideas</a></Link>
            <Link href="/script"><a className="text-sm">Script</a></Link>
            <Link href="/kanban"><a className="text-sm">Planner</a></Link>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-2">Quick Actions</h2>
            <div className="flex gap-3">
              <a href="/ideas" className="px-4 py-2 bg-indigo-600 text-white rounded">+ New Idea</a>
              <a href="/script" className="px-4 py-2 border rounded">Generate Script</a>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Content Pipeline</h3>
              <div className="mt-3 grid grid-cols-4 gap-3">
                <div className="p-3 bg-gray-50 rounded">Idea <div className="text-xs text-gray-500 mt-2">12</div></div>
                <div className="p-3 bg-gray-50 rounded">Draft <div className="text-xs text-gray-500 mt-2">5</div></div>
                <div className="p-3 bg-gray-50 rounded">Editing <div className="text-xs text-gray-500 mt-2">2</div></div>
                <div className="p-3 bg-gray-50 rounded">Published <div className="text-xs text-gray-500 mt-2">18</div></div>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-medium">Stats</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Followers total: <strong>—</strong></li>
              <li>Engagement: <strong>—</strong></li>
              <li>Content this month: <strong>—</strong></li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  )
}
