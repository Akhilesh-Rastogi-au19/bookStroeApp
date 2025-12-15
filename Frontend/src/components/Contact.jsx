import React from 'react'

function Contact() {
  return (

    <>
    <div>
      <div class="max-w-md mx-auto p-6 bg-base-100 shadow-md rounded-xl">
  <h2 class="text-2xl font-bold mb-4 text-center">Contact Us</h2>

  <form class="space-y-4">

    <div class="form-control">
      <label class="label">
        <span class="label-text">Full Name</span>
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        class="input input-bordered w-full"
      />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        placeholder="your@email.com"
        class="input input-bordered w-full"
      />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Message</span>
      </label>
      <textarea
        class="textarea textarea-bordered h-24"
        placeholder="Write your message..."
      ></textarea>
    </div>

    <button class="btn btn-primary w-full">Send Message</button>

  </form>
</div>

    </div>
    </>
  )
}


export default Contact

