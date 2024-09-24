import { useState } from "react";
import Input from "../components/input";
import Result from "../components/result";
import { ResultType } from "../../types/type";
import Button from "../components/button";

export default function ManuscriptCount() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState<ResultType>({
		lineList: [],
		extraText: "",
	});
	const lineLength = 25;
	const lineMax = 20

	const formatArticle = (text: string): string[] => {
    const regex = new RegExp(`.{1,${lineLength}}`, 'g');
    const result = text.match(regex) || [];
		if (result.slice(-1)[0] === "。") {
			result.pop()
		}
		console.log(result);
    return result;
	}
	const formatExtraText = (textList: string[]): ResultType => {
    const isOverLimit = textList.length > lineMax;

    const lineList = textList.slice(0, lineMax);
    const extraText = isOverLimit ? textList.slice(lineMax).join("") : "";
    return {
        lineList,
        extraText,
    };
	}

	const countManuscript = (initialText: string): ResultType => {
		const textList = initialText.split(/(?<=。)\n/);
		const lineList: string[] = [];

		textList.forEach((text) => {
			console.log(text);
			const formattedText = formatArticle(`　${text}`);
			lineList.push(...formattedText);
		})

		return formatExtraText(lineList);
	}

  const handleButtonClick = () => {
		const result = countManuscript(inputText);
		console.log(result);
		setResultText(result);
  };

	return (
		<section className="flex justify-between w-full h-full">
			<div className="relative w-1/3">
				<Input value={inputText} onChange={setInputText} />
				<Button onClick={handleButtonClick} />
			</div>
			<Result result={resultText} />
		</section>
	);
}
