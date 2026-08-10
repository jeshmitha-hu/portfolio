import { ChevronLeft, ChevronRight } from "lucide-react";

type Props =
{
    sections: string[];

    currentStep: number;

    onPrevious: () => void;

    onNext: () => void;

    onSelect: (index: number) => void;
};

const ProjectWorkflow = (
{
    sections,
    currentStep,
    onPrevious,
    onNext,
    onSelect
}: Props) =>
{
    return (

        <div className="case-study-navigation">

            <div className="case-study-tabs">

                {sections.map((section, index) => (

                    <button

                        key={section}

                        className={
                            currentStep === index
                                ? "case-tab active"
                                : "case-tab"
                        }

                        onClick={() => onSelect(index)}

                    >

                        {section}

                    </button>

                ))}

            </div>

            <div className="case-study-controls">

                <button

                    className="workflow-btn"

                    onClick={onPrevious}

                    disabled={currentStep === 0}

                >

                    <ChevronLeft size={18} />

                    Previous

                </button>

                <span className="workflow-count">

                    {currentStep + 1} / {sections.length}

                </span>

                <button

                    className="workflow-btn"

                    onClick={onNext}

                    disabled={currentStep === sections.length - 1}

                >

                    Next

                    <ChevronRight size={18} />

                </button>

            </div>

        </div>

    );
};

export default ProjectWorkflow;