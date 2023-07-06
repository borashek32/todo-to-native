import {Button, StyleSheet, View} from "react-native"
import React, {useCallback} from "react"
import {useAppSelector} from "./../../../common/hooks/use-app-selector"
import {selectIsLoggedIn} from "./../../../features/auth/auth.selectors"
import {authThunks} from "./../../../features/auth/auth.slice"
import {useAppDispatch} from "./../../../common/hooks/use-app-dispatch"


export const Nav = () => {
  
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const logoutHandler = useCallback(() => {
    dispatch(authThunks.logout())
  }, [])
  
  return (
    <View style={styles.header}>
      {isLoggedIn && <Button title={'Log out'} onPress={logoutHandler} />}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginTop: -13
  }
})