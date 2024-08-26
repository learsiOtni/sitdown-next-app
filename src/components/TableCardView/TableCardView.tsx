import { CardView } from "../CardUpdates/CardUpdate";
import TableIcon from "@/components/Icon/TableIcon"
import CardIcon from "@/components/Icon/CardIcon"
import classes from "./TableCardView.module.css"

type TableCardViewProps = {
    view: CardView
    onChange: (newView: CardView) => void
}
export default function TableCardView({view, onChange}: Readonly<TableCardViewProps>) {

    return (
        <div className="hidden md:flex md:justify-end md:mt-10">
          <div className="bg-[#EBEFF0] p-1.5 w-[177px] flex">
            <button
              className={`${classes.optionContainer} ${view === "table" ? classes.active : classes.inactive}`}
              onClick={() => onChange("table")}
            >
              <TableIcon color={`${view === "table" ? "bg-primary" : "bg-[#454D57]"}`} />
              <p className="ml-1.5">Table</p>
            </button>

            <button
              className={`${classes.optionContainer} ${view === "card" ? classes.active : classes.inactive}`}
              onClick={() => onChange("card")}
            >
              <CardIcon color={`${view === "card" ? "bg-primary" : "bg-[#454D57]"}`}  />
              <p className="ml-1.5">Card</p>
            </button>
          </div>
        </div>
    )
}