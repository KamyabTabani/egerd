import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,} from '@chakra-ui/react'
import "./accordion.scss"

export interface IAccordion {
    title: string
    body: string
}

const AccordionBox = ({title, body}: IAccordion) => {
    return (
        <div className="Accordion-Box">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        {title}
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {body}
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default AccordionBox;