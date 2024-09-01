import { onHide, onShow } from "../../store/dashboard/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks"


export const useUiStore = () => {
    const dispatch = useAppDispatch();
    const loader = useAppSelector(state => state.ui.loader);

    const hide = () => dispatch(onHide());
    const show = () => dispatch(onShow());

    return {
        loader,
        show,
        hide
    }
}
