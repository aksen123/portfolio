import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { activeTab, hideForm } from "../../redux/formSlice";
type TapType = {
  title: string;
  icon: string;
  idx: number;
  active: boolean;
  hide: boolean;
};

const WindowTab = ({ title, icon, idx, active, hide }: TapType) => {
  const dispatch = useDispatch<AppDispatch>();
  const click = () => {
    if (active) {
      dispatch(hideForm({ idx: idx }));
    } else if (!active && hide) {
      dispatch(hideForm({ idx: idx }));
      dispatch(activeTab({ idx: idx }));
    } else if (!active && !hide) {
      dispatch(activeTab({ idx: idx }));
    }
  };

  return (
    <div className={active ? `window-tab on` : `window-tab`} onClick={click}>
      <img width={30} src={icon} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default WindowTab;
