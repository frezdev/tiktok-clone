import { useRef } from 'react'
import { useLocation } from 'wouter'
import { registerUser, singUpUser } from '../../services'

export default function SingUp () {
  const form = useRef()
  const [, setLocation] = useLocation()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const entries = Object.values(form.current)

    const [email, password] = entries

    const [username] = email.value.split('@')

    const { error: registerError } = await registerUser({ username })

    const { error: singUpError, data } = await singUpUser({
      email: email.value,
      password: password.value
    })

    if (data) {
      console.log({ data })
      setLocation('/')
    }

    if (singUpError || registerError) {
      console.error({ singUpError }, { registerError })
      return (
        <div>
          <h2>Hubo un error</h2>
        </div>
      )
    }
  }
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} action=''>
        <label htmlFor='email'>
          <input type='email' name='email' id='email' />
        </label>
        <label htmlFor='password'>
          <input type='password' name='password' id='password' />
        </label>
        <button type='submit'>
          Sing up
        </button>
      </form>
    </div>
  )
}
