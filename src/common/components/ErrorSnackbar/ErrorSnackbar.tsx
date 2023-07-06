import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "app/store"
import {appActions} from "./../../../app/app.slice"
import {useAppSelector} from "./../../../common/hooks/use-app-selector"
import {selectAppError} from "./../../../app/app.selectors"
import {View, Text} from "react-native";

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
// })

export function ErrorSnackbar() {

  const error = useAppSelector(selectAppError)
  const dispatch = useDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(appActions.setAppError({ error: '' }))
  }

  const isOpen = error !== null

  return (
      <View>
        <Text>{error}</Text>
      </View>
    // <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
    //   <Alert onClose={handleClose} severity="error">
    //     {error}
    //   </Alert>
    // </Snackbar>
  )
}