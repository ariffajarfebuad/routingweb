import { redirect, useActionData } from "react-router-dom"

export default function Contact() {
  const data = useActionData() 

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>

        {data && data.error && <p>{data.error}</p>}
    </div>
  )
}

export const contactAction = async ({ request }) => {
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  // send your post request

  if (submission.message.length < 10) {
    return {error: 'Message must be over 10 chars long.'}
  }

  // redirect the user
  return redirect('/')
}