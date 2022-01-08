import { mount } from '@vue/test-utils'
import Entries from '@/views/Entries.vue'
import EntryForm from '@/components/createEntryForm'

describe('Testing Entries.vue', () => {
  it('should show page title', () => {
    const wrapper = mount(Entries)

    expect(wrapper.text()).toMatch('Entries')
  })

  it('should have Entry Button Component', () => {
    const wrapper = mount(Entries)

    const CreateForm = wrapper.findComponent(EntryForm)
    expect(CreateForm.exists()).toBeTruthy()
  })
})

