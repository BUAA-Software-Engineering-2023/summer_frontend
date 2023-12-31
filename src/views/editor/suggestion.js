import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'
import teamFuction from '@/api/team'
import MentionList from './mentionList.vue'
import { getTeamId } from "@/utils/token";

export default {
    items: async ({query}) => {
        let res = await teamFuction.queryTeamMember(getTeamId())
        let nameArr = []
        res.data.members.forEach((item) => {
            nameArr.push(item)
        })
        return nameArr.filter(item => item.name.toLowerCase().startsWith(query.toLowerCase()))
    },
    render: () => {
        let component
        let popup

        return {
            onStart: props => {
                component = new VueRenderer(MentionList, {
                    // using vue 2:
                    // parent: this,
                    // propsData: props,
                    // using vue 3:

                    props,
                    editor: props.editor,
                })

                if (!props.clientRect) {
                    return
                }

                popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                })
            },

            onUpdate(props) {
                component.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                })
            },

            onKeyDown(props) {
                if (props.event.key === 'Escape') {
                    popup[0].hide()

                    return true
                }

                return component.ref?.onKeyDown(props)
            },

            onExit() {
                popup[0].destroy()
                component.destroy()
            },
        }
    },
}