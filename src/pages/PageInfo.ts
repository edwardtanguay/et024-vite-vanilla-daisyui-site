import { Alert } from "../components/Alert";

export const PageInfo = () => {
	return /*html*/`

	${Alert('alert-info', 'Records will be marked for copying.')}
	${Alert('alert-success', 'All records have been copied.')}
	
</div>
`; 
}