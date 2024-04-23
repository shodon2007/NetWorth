<<<<<<< HEAD
import {FC} from "react";
import Input from "src/shared/ui/Input/Input";
import cls from "./LoginPage.module.scss";
import Button from "src/shared/ui/Buttons/authSubmitBtn/Button";
import Block from "src/shared/ui/Block/Block";
import {Title} from "src/shared/ui/Title/Title";
import MyLink from "src/shared/ui/Link/Link";
import {setUser, userApi} from "src/entities";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {AuthRequest} from "src/entities/User/model/Auth";
import {toast} from "react-toastify";
import { useAppDispatch } from "src/shared/lib/store";
=======
import { FC } from "react";
import LoginWidget from "src/widgets/ui/auth/ui/LoginWidget";
>>>>>>> main


<<<<<<< HEAD
const LoginPage: FC<LoginPageProps> = () => {
	const [loginUser] = userApi.useFetchLoginMutation();
	const dispatch = useAppDispatch();
	const {control, handleSubmit} = useForm<AuthRequest>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const submit: SubmitHandler<AuthRequest> = async (data) => {
		const resp = await loginUser(data);
		if ('error' in resp) {
			//@ts-ignore
			toast.error(resp.error.data.message, {
				autoClose: 2000,
			});
		} else {
			dispatch(setUser(resp.data));
		}
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Block className={cls.page}>
				<Title>Login</Title>
				<div className={cls.inputs}>
					<Controller
						control={control}
						name="email"
						render={({field}) => {
							return <Input placeholder="Введите email" {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="password"
						render={({field}) => {
							return <Input placeholder="Введите пароль" {...field} />;
						}}
					/>
				</div>
				<div className={cls.bottom}>
					<Button type="submit">Войти</Button>
					<MyLink to="/registration">Создать аккаунт</MyLink>
				</div>
			</Block>
		</form>
=======
const LoginPage: FC = () => {

	// It's incorrect to write any other code in page folder
	// exclude the widgets in our proejct that is wrong
	return (
		<LoginWidget />
>>>>>>> main
	);
};

export default LoginPage;
