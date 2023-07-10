import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
