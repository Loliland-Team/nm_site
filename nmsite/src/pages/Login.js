import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import bg from '../uploads/bg2.mp4'
import * as f from '../utils/functions.js'
import * as Request from '../utils/Request.js'

export function Login({ setToken }) {
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)

	const [loading, setLoading] = useState(true);
	let loader = document.querySelector('div.loader')

	if (loading && loader.style.display === 'none')
		loader.style.display = ''

	if (loading && loader) {
		setTimeout(() => {
			setLoading(false)
			loader.style.display = 'none'
		}, 2000)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const token = await Request.login({
			pass: password,
			name: username
		})
		console.log(token)
		sessionStorage.setItem('uid', token.uid)
		setToken({token: token.token})
	}

	if (!f.loadedStyles.Main._this) f.mainStyle()
	if (!f.loadedStyles.Login._this) f.loginStyle()

	return !loading && (
		<React.Fragment>
			<video playsInline autoPlay muted loop style={{zIndex: -1}}>
				<source src={bg} />
			</video>
			<div id={'login'}>
				<div className={'login'}>
					<div id={'authm'} className={'p-0'}>
						<div className={'row no-gutters'}>
							<div className={'col-12 p-md-4'}>
								<div className={'h5 text-center'} style={{marginBottom: '200px'}}>Авторизация</div>
								<form className={'py-3'} onSubmit={handleSubmit}>
									<div className={'form-group'}>
										<input onChange={(event) => setUsername(event.currentTarget.value)} type={'text'} className={'form-control'} id={'inputEmail'} name={'username'} placeholder={'Ваш логин'} />
									</div>
									<div className={'form-group'}>
										<input onChange={(event) => setPassword(event.currentTarget.value)} type={'password'} className={'form-control'} id={'inputPassword'} name={'password'} placeholder={'Ваш пароль'} />
									</div>
									<button className={'btn btn-primary btn-block px-3'} style={{paddingTop: '10px'}}>Войти</button>
									<Link className={'btn btn-primary btn-block px-3 mt-2'} to={'/register'}>Создать аккаунт</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'footer f90 mt-auto'}>
				<div className={'container py-3 text-muted'}>
					<div className={'row'}>
						<div className={'col-12 col-md-8 align-items-center'}>
							<ul className={'list-inline mb-3 mb-md-0'}>
								<li className={'list-inline-item ttle'}><Link to={'/terms'} style={{color: '#fff'}}>Соглашение</Link></li>
								<li className={'list-inline-item ttle'}><Link to={'/privacy'} style={{color: '#fff'}}>Конфиденциальность</Link></li>
								<li className={'list-inline-item ttle'}><Link to={'/feedback'} style={{color: '#fff'}}>Обратная связь</Link></li>
							</ul>
						</div>
						<div className={'col-12 col-md-2 align-items-center'}>
							<div className={'d-flex mb-3 mb-md-0'}> </div>
						</div>
						<div className={'col-12 col-md-2'}>
							<div className={'d-flex align-items-center h-100'}>
								<div className={'ttle'}>© <span style={{fontWeight: 400}}>NanoMagic</span>, 2022-{(new Date(new Date())).getFullYear()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'response'} />
		</React.Fragment>
	)
}
