import { Alert } from "../components/Alert";
import { SectionHeader } from "../components/SectionHeader";

export const PageInfo = () => {
	return /*html*/`

	${SectionHeader('DaisyUI Alerts')}
	${Alert('info', 'Records can now be copied.')}
	${Alert('success', 'Records have finished copying.')}
	${Alert('warning', 'Record copying duration may be more than two minutes.')}
	${Alert('error', 'Records could not be copied.')}
</div>
`;
}