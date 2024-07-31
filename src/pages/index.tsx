import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root defaultValue="all" className="mt-10">
          <Tabs.List aria-label="Filter todo status" className="flex gap-2">
            <Tabs.Trigger
              className="rounded-full border-2 border-[#E2E8F0] bg-white px-6 py-2 font-bold  text-[#334155] data-[state=active]:border-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className="rounded-full border-2 border-[#E2E8F0] bg-white px-6 py-2 font-bold  text-[#334155] data-[state=active]:border-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="rounded-full border-2 border-[#E2E8F0] bg-white px-6 py-2 font-bold  text-[#334155] data-[state=active]:border-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="all">
            <div className="pt-10">
              <TodoList filter="all" />
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="pending">
            <div className="pt-10">
              <TodoList filter="pending" />
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="completed">
            <div className="pt-10">
              <TodoList filter="completed" />
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
