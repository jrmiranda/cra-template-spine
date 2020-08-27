import React, { useState } from 'react'
import { Wrapper, Container, Title, Footer } from '../components/Layout'
import { Form, Field, Button, Error } from '../components/Form'
import { useHistory } from 'react-router-dom'
import api from '../authApi'
import { login } from 'services/auth'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const RegisterPage = () => {
	const history = useHistory()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()

		if (!username || !password) {
			setError('Preencha todos os campos para continuar')
			return
		}

		try {
			const response = await api.getToken({ username, password })
			login(response.data.token)
			history.push('/admin')
		} catch (err) {
			setError('Nome de usuário ou senha inválidos')
		}
	}

	return (
		<Wrapper>
			<Container>
				<Title>Novo Usuário</Title>
				{error && <Error>{error}</Error>}
				<Form>
					<Field
						type="text"
						icon={faUser}
						placeholder="Nome de usuário"
						onChange={e => setUsername(e.target.value)}
					/>
					<Field
						type="text"
						icon={faEnvelope}
						placeholder="E-mail"
						onChange={e => setUsername(e.target.value)}
					/>
					<Field
						type="password"
						icon={faLock}
						placeholder="Senha"
						onChange={e => setPassword(e.target.value)}
					/>
					<Button onClick={handleSubmit}>Criar Conta</Button>
				</Form>
				<Footer>
					Já possui conta? <b><a href="#">Clique aqui</a></b>
				</Footer>
			</Container>
		</Wrapper>
	);
}

export default RegisterPage