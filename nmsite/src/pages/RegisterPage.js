import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import bg from '../uploads/bg2.mp4'
import * as f from '../utils/functions.js'
import * as Request from '../utils/Request.js'
import { Link } from 'react-router-dom'
import useToken from '../useToken.js'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,40}$/
const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/

export function RegisterPage(props) {
	const userRef = useRef()
	const errRef = useRef()
	const {token, setToken} = useToken()

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

	if (!f.loadedStyles.Main) f.mainStyle()
	if (!f.loadedStyles.Login) f.loginStyle()

	const [user, setUser] = useState('')
	const [validName, setValidName] = useState(false)
	const [userFocus, setUserFocus] = useState(false)

	const [pwd, setPwd] = useState('')
	const [validPwd, setValidPwd] = useState(false)
	const [pwdFocus, setPwdFocus] = useState(false)

	const [matchPwd, setMatchPwd] = useState('')
	const [validMatch, setValidMatch] = useState(false)
	const [matchFocus, setMatchFocus] = useState(false)

	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)


	useEffect(() => {
		const result = USER_REGEX.test(user)
		setValidName(result)
	}, [user])

	useEffect(() => {
		const result = PWD_REGEX.test(pwd)
		setValidPwd(result)
		const match = pwd === matchPwd
		setValidMatch(match)
	}, [pwd, matchPwd])

	useEffect(() => {
		setErrMsg('')
	}, [user, pwd, matchPwd])

	if (!f.loadedStyles.Main._this) f.mainStyle()
	if (!f.loadedStyles.Login._this) f.loginStyle()

	return !loading && (
		<React.Fragment>
			<video playsInline autoPlay muted loop style={{ zIndex: -1 }}>
				<source src={bg} />
			</video>
			<p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live={'assertive'}>{errMsg}</p>
			<div id={'login'}>
				<div className={'login'}>
					<div id={'authm'} className={'p-0'}>
						<div className={'row no-gutters'}>
							<div className={'col-12 p-md-4'}>
								<div className={'h5 text-center'}>Регистрация пользователя</div>
								<form className={'py-3'} onSubmit={e => e.preventDefault()}>
									<div className={'form-group'}>
										<label htmlFor={'inputName'}>
											Username:
											<span className={validName ? 'valid' : 'hide'}>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span className={validName || !user ? 'hide' : 'invalid'}>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<input
											type={'text'}
											id={'inputName'}
											ref={userRef}
											autoComplete={'off'}
											className={'form-control'}
											name={'username'}
											placeholder={'Ваш логин'}
											required
											aria-invalid={validName ? 'false' : 'true'}
											aria-describedby={'uidnote'}
											onChange={(e) => setUser(e.target.value)}
											onFocus={() => setUserFocus(true)}
											onBlur={() => setUserFocus(false)}
										/>
										<p id={'uidnote'} className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
											<FontAwesomeIcon icon={faInfoCircle} />
											От 4 до 40 символов.<br />Должен начинатся с буквы. <br />Допускаются буквы, цифры, подчеркивания, дефисы.
										</p>
									</div>
									<div className={'form-group'}>
										<label htmlFor={'inputPassword'}>
											Password:
											<span className={validPwd ? 'valid' : 'hide'}>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span className={validPwd || !pwd ? 'hide' : 'invalid'}>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<input
											type={'password'}
											className={'form-control'}
											id={'inputPassword'}
											name={'password'}
											placeholder={'Ваш пароль'}
											onChange={(e) => setPwd(e.target.value)}
											onFocus={() => setPwdFocus(true)}
											onBlur={() => setPwdFocus(false)}
											aria-invalid={validPwd ? 'false' : 'true'}
											aria-describedby={'pwdnote'}
										/>
										<p id={'pwdnote'} className={pwdFocus && pwd && !validPwd ? 'instructions' : 'offscreen'}>
											<FontAwesomeIcon icon={faInfoCircle} />
											От 6 до 64 символов. <br />Должно содержать заглавные и строчные буквы, <br />цифру и специальный символ.
										</p>
									</div>
									<div className={'form-group'}>
										<label htmlFor={'inputPassword'}>
											Confirm Password:
											<span className={validMatch && matchPwd ? 'valid' : 'hide'}>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<input
											type={'password'}
											className={'form-control'}
											id={'inputPassword2'}
											name={'confirm_pwd'}
											placeholder={'Повторите пароль'}
											onChange={(e) => setMatchPwd(e.target.value)}
											onFocus={() => setMatchFocus(true)}
											onBlur={() => setMatchFocus(false)}
											aria-invalid={validPwd ? 'false' : 'true'}
											aria-describedby={'pwdnote'}
										/>
									</div>
									<button className={'btn btn-primary btn-block px-3'} style={{paddingTop: 10 + 'px'}} onClick={() => reg(user, pwd, setToken)}>Зарегестрироваться</button>
									<Link to={'/'} className={'btn btn-primary btn-block px-3'}>Вернутся</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer f90 mt-auto">
				<div className="container py-3 text-muted">
					<div className="row">
						<div className="col-12 col-md-8 align-items-center">
							<ul className="list-inline mb-3 mb-md-0">
								<li className="list-inline-item ttle"><a href="/terms" className="" style={{ color: '#fff' }}>Соглашение</a></li>
								<li className="list-inline-item ttle"><a href="/privacy" className="" style={{ color: '#fff' }}>Конфиденциальность</a></li>
								<li className="list-inline-item ttle"><a href="/feedback" className="" style={{ color: '#fff' }}>Обратная связь</a></li>
							</ul>
						</div>
						<div className="col-12 col-md-2 align-items-center">
							<div className="d-flex mb-3 mb-md-0"> </div>
						</div>
						<div className="col-12 col-md-2">
							<div className="d-flex align-items-center h-100">
								<div className="ttle">© <span style={{ fontWeight: 400 }}>NanoMagic</span> 2022-{new Date(new Date()).getFullYear()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

async function reg(user, pwd, setToken) {
	let data = await Request.register({user, pwd})
	if (typeof data === 'object' && data.accessToken) {
		setToken({token: data.accessToken})
		sessionStorage.setItem('uid', data.uid)
		window.location.href = '/'
	} else {
		console.log(data)
	}
}