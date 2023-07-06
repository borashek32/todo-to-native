import React from "react"
import {Form, useFormik} from "formik"
import { useSelector } from "react-redux"
import { AppRootStateType } from "./../../app/store"
import { useAppDispatch } from "./../../common/hooks/use-app-dispatch"
import {authThunks} from "./../../features/auth/auth.slice"
import {View, Text, TextInput, Button} from "react-native"

export const Login = () => {
  const dispatch = useAppDispatch()

  const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

  const formik = useFormik({
    validate: (values) => {
      if (!values.email) {
        return {
          email: "Email is required",
        }
      }
      if (!values.password) {
        return {
          password: "Password is required",
        }
      }
    },
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      dispatch(authThunks.login({
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe
      }))
    },
  })

  // if (isLoggedIn) {
  //   return <Navigate to={"/"} />
  // }

  return (
    <View>
      <View>
        <Form onSubmit={formik.handleSubmit}>
          <View>
            <View>
              <TextInput {...formik.getFieldProps("email")} />
              {/*{formik.errors.email ? <div>{formik.errors.email}</div> : null}*/}
              <TextInput {...formik.getFieldProps("password")} />
              {/*{formik.errors.password ? <div>{formik.errors.password}</div> : null}*/}
              {/*<FormControlLabel*/}
              {/*  label={"Remember me"}*/}
              {/*  control={<Checkbox {...formik.getFieldProps("rememberMe")} checked={formik.values.rememberMe} />}*/}
              {/*/>*/}
              <Button
                title={'Login'}
              />
            </View>
          </View>
        </Form>
      </View>
    </View>
  )
}
