function Dropdown() {
    return (
        <div class="relative">
        <button onClick="toggle" type="button" class="block focus:outline-none" onFocus="buttonHasFocus = true" onBlur="buttonHasFocus = false">
          <slot name="trigger" ></slot>
        </button>
        <div class="[isOpen ? 'block' : 'hidden']">
          <button onClick="isOpen = false" type="button" class="z-30 block fixed inset-0 w-full h-full cursor-default"></button>
          <div class="absolute z-40 right-0">
            <slot name="dropdown"></slot>
          </div>
        </div>
      </div>
    )
}

export default {
    props: [],
    data() {
      return {
        buttonHasFocus: false,
        isOpen: false,
      }
    },
    mounted() {
      const onEscape = (e) => {
        if (!this.isOpen || e.key !== 'Escape') {
          return
        }
        this.isOpen = false
      }
      document.addEventListener('keydown', onEscape)
      this.$on('hook:destroyed', () => {
        document.removeEventListener('keydown', onEscape)
      })
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      },
    },
  }