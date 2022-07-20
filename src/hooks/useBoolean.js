import { useState } from "react";

export const useBoolean = () => {
	const [state, setState] = useState(false);

	return [state, setState];
};
