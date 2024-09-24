import { ResultType } from "../../types/type"

export default function Result({ result }: { result: ResultType }) {
	const { lineList, extraText } = result
	if (lineList.length === 0) {
		return null
	}
	return (
		<div className="grid w-2/3 gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
			<div className="max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-lg">
				<div className="grid gap-px p-px bg-gray-300 grid-cols-25">
					{lineList.map((text, lineIndex) => (
						<div key={lineIndex} className="flex">
							{text.split('').map((char, charIndex) => (
								<div
									key={`${lineIndex}-${charIndex}`}
									className="flex items-center justify-center w-6 h-6 text-sm bg-white border border-gray-200"
								>
									{char}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<ExtraText extraText={extraText} />
		</div>
	)
}

function ExtraText({ extraText }: { extraText: string }) {
	const count = extraText.length
	if (count === 0) {
		return null
	}
	return (
		<div className="p-4 mt-4 bg-white rounded-lg shadow-md">
			<p className="font-semibold text-red-600">超過文字数：{count}</p>
			<p className="text-gray-800">{extraText}</p>
		</div>
	)
}
