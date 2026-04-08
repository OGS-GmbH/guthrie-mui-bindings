import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AppBar from "@mui/material/AppBar";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Backdrop from "@mui/material/Backdrop";
import Badge from "@mui/material/Badge";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import FilledInput from "@mui/material/FilledInput";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MobileStepper from "@mui/material/MobileStepper";
import Modal from "@mui/material/Modal";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Popper from "@mui/material/Popper";
import Portal from "@mui/material/Portal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Slide from "@mui/material/Slide";
import Slider from "@mui/material/Slider";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepConnector from "@mui/material/StepConnector";
import StepContent from "@mui/material/StepContent";
import StepIcon from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import SvgIcon from "@mui/material/SvgIcon";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Switch from "@mui/material/Switch";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationActions from "@mui/material/TablePaginationActions";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tabs from "@mui/material/Tabs";
import TabScrollButton from "@mui/material/TabScrollButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import type { Elements } from "@ogs-gmbh/guthrie";
import type { GetMuiComponentBindingsOptions } from "./types.js";

/**
 * `Object` containing all MUI components that are supported by the bindings. The keys are the kebab-case version of the component names, and the values are the corresponding MUI components.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
const muiComponentBindings: Elements = {
  autocomplete: Autocomplete,
  button: Button,
  "icon-button": IconButton,
  "button-group": ButtonGroup,
  checkbox: Checkbox,
  fab: Fab,
  radio: Radio,
  "radio-group": RadioGroup,
  rating: Rating,
  "native-select": NativeSelect,
  select: Select,
  slider: Slider,
  switch: Switch,
  "filled-input": FilledInput,
  input: Input,
  "input-adornment": InputAdornment,
  "input-base": InputBase,
  "input-label": InputLabel,
  "outlined-input": OutlinedInput,
  "text-field": TextField,
  list: List,
  "list-item": ListItem,
  "toggle-button": ToggleButton,
  "toggle-button-gggroup": ToggleButtonGroup,
  avatar: Avatar,
  "avatar-group": AvatarGroup,
  badge: Badge,
  chip: Chip,
  divider: Divider,
  icon: Icon,
  "svg-icon": SvgIcon,
  collapse: Collapse,
  "list-item-avater": ListItemAvatar,
  "list-item-button": ListItemButton,
  "list-item-icon": ListItemIcon,
  "list-item-text": ListItemText,
  "list-subheader": ListSubheader,
  table: Table,
  "table-body": TableBody,
  "table-cell": TableCell,
  "table-container": TableContainer,
  "table-footer": TableFooter,
  "table-head": TableHead,
  "table-pagination": TablePagination,
  "table-row": TableRow,
  "table-sort-label": TableSortLabel,
  tooltip: Tooltip,
  typography: Typography,
  alert: Alert,
  "alert-title": AlertTitle,
  backdrop: Backdrop,
  dialog: Dialog,
  "dialog-actions": DialogActions,
  "dialog-content": DialogContent,
  "dialog-content-text": DialogContentText,
  "dialog-title": DialogTitle,
  slide: Slide,
  "circular-progress": CircularProgress,
  "linear-progress": LinearProgress,
  skeleton: Skeleton,
  snackbar: Snackbar,
  "snackbar-content": SnackbarContent,
  accordion: Accordion,
  "accordion-actions": AccordionActions,
  "accordion-details": AccordionDetails,
  "accordion-summary": AccordionSummary,
  "app-bar": AppBar,
  menu: Menu,
  toolbar: Toolbar,
  card: Card,
  "card-action-area": CardActionArea,
  "card-actions": CardActions,
  "card-content": CardContent,
  "card-header": CardHeader,
  "card-media": CardMedia,
  paper: Paper,
  "bottom-navigation": BottomNavigation,
  "bottom-navigation-action": BottomNavigationAction,
  breadcrumbs: Breadcrumbs,
  link: Link,
  drawer: Drawer,
  "swipeable-drawer": SwipeableDrawer,
  "menu-item": MenuItem,
  "menu-list": MenuList,
  popover: Popover,
  popper: Popper,
  pagination: Pagination,
  "pagination-item": PaginationItem,
  "table-pagination-actions": TablePaginationActions,
  "speed-dial": SpeedDial,
  "speed-dial-action": SpeedDialAction,
  "speed-dial-icon": SpeedDialIcon,
  "mobile-stepper": MobileStepper,
  step: Step,
  "step-button": StepButton,
  "step-connector": StepConnector,
  "step-content": StepContent,
  "step-icon": StepIcon,
  "step-label": StepLabel,
  stepper: Stepper,
  tab: Tab,
  "tab-scroll-button": TabScrollButton,
  tabs: Tabs,
  box: Box,
  container: Container,
  grid: Grid,
  stack: Stack,
  "image-list": ImageList,
  "image-list-item": ImageListItem,
  "image-list-item-bar": ImageListItemBar,
  "click-away-listener": ClickAwayListener,
  modal: Modal,
  grow: Grow,
  portal: Portal,
  "textarea-autosize": TextareaAutosize,
  fade: Fade,
  zoom: Zoom
};

/**
 * `Function` to get all MUI component bindings.
 *
 * @param options - Options for the function. See {@link GetMuiComponentBindingsOptions}.
 * @returns An `Object` containing all MUI component bindings. The keys are the kebab-case version of the component names (or the mapped names if a mapping function is provided), and the values are the corresponding MUI components.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getMuiComponentBindings(options?: GetMuiComponentBindingsOptions): Elements {
  if (!options?.mapNames) return muiComponentBindings;

  const mappedBindings: Elements = {};

  for (const key in muiComponentBindings) {
    const mappedKey = options.mapNames(key);
    mappedBindings[mappedKey] = muiComponentBindings[key]!;
  }

  return mappedBindings;
}

export { getMuiComponentBindings };
