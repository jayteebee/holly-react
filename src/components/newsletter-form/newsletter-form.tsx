import { useState } from 'react'
import Modal from 'react-modal' // Ensure this import is correct
import { cn } from '@/utils/cn' // Ensure this utility function is correctly implemented
import type { FormEvent } from 'react'

Modal.setAppElement('#root')

function NewsletterForm({
  className,
  onSubmit,
  submitText = 'Submit',
}: {
  className?: string
  onSubmit: (email: string) => Promise<any>
  submitText?: string
}) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = await onSubmit(email)
    console.log(result)
    setEmail('')
    setSuccess(true)
    setModalIsOpen(true)
  }

  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   setEmail(event.target.value)
  // }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn('newsletter-form is-revealing flex flex-col gap-2 sm:flex-row', className)}
      >
        {/* <div className="mr-2 flex-shrink flex-grow"> 
          <label htmlFor="email" className="hidden" aria-hidden="true">
            Email
          </label>
          <input
            required
            placeholder="Your best email…"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            className="rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
          />
          {success && (
            <div className="mt-2 text-xs italic text-gray-500">Email submitted successfully!</div>
          )}
        </div> */}
        <div className="control">
          <button
            type="submit"
            className="cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white"
          >
            {submitText}
          </button>
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="My dialog"
      >
        <div className="align-center flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScgiIEI69zspR75bO5Uur3SbKUK9c3tjuzafFFZNka9ZR6czA/viewform?embedded=true"
            width="640"
            height="2309"
            title="Newsletter Form"
          >
            Loading…
          </iframe>
        </div>

        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default NewsletterForm
