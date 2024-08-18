import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
  PersonIcon,
  RocketIcon,
  CookieIcon,
  LaptopIcon,
  CameraIcon
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]

export const assignment = [
  {
    value: "Assim",
    label: "Assim",
    icon: LaptopIcon,
  },
  {
    value: "Abi",
    label: "Abi",
    icon: LaptopIcon,
  },
  {
    value: "Bereket",
    label: "Bereket",
    icon: CookieIcon,
  },
  {
    value: "Bibi",
    label: "Bibi",
    icon: RocketIcon,
  },
  {
    value: "Muka",
    label: "Muka",
    icon: CameraIcon,
  },
]