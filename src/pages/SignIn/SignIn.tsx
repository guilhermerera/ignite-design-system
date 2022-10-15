import { FormEvent, useState } from "react";
import axios from "axios";
import { Checkbox } from "../../components/Checkbox";
import { Envelope } from "phosphor-react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { TextInput } from "../../components/TextInput";
import { Text } from "../../components/Text";
import { Lock } from "phosphor-react";
import ReactLogo from "../../ReactLogo";

export function SignIn() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);
	const [loginInfo, setLoginInfo] = useState({});
	const [loginMessage, setLoginMessage] = useState("");

	//Simulating a login API call
	async function handleSignIn(event: FormEvent) {
		event.preventDefault();

		await axios.post("/api/login", {
			data: loginInfo
		});

		setIsUserSignedIn(true);
	}

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 '>
			<header className='flex flex-col items-center'>
				<ReactLogo />
				<Heading size='lg' className='mt-4'>
					Ignite Lab
				</Heading>
				<Text size='lg' className='text-gray-400 mt-1'>
					Faça login e comece a usar
				</Text>
			</header>
			<form
				onSubmit={handleSignIn}
				className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
				{isUserSignedIn && <Text>Login realizado com sucesso!</Text>}
				<label htmlFor='email' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Endereço de e-mail</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input
							type='email'
							id='email'
							placeholder='Digite seu email'
						/>
					</TextInput.Root>
				</label>
				<label htmlFor='password' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Sua senha</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input
							type='password'
							id='password'
							placeholder='*********'
						/>
					</TextInput.Root>
				</label>
				<label htmlFor='remember'>
					<Checkbox id='remember' label='Lembrar de mim por 30 dias' />
				</label>
				<Button className='mt-4' type='submit'>
					Entrar na plataforma
				</Button>
			</form>
			<footer className='flex flex-col gap-4 items-center mt-8'>
				<Text asChild size='sm'>
					<a href='' className='text-gray-400 underline hover:text-gray-200'>
						Esqueci minha senha
					</a>
				</Text>
				<Text asChild size='sm'>
					<a href='' className='text-gray-400 underline hover:text-gray-200'>
						Não possui conta? Cadastre-se!
					</a>
				</Text>
			</footer>
		</div>
	);
}
