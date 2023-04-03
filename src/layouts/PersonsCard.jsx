import styles from './styles/_persons-card.module.scss'
import { Button } from '@ui/Button'
import { SelectPerson } from '@components/SelectPerson/SelectPerson'
import { Window } from '@components/ui/Window'
import { Box } from '@components/ui/Box'
import { List } from '@components/ui/List'
import colors from '@styles/colors.json'

export const PersonsCard = () => {
    const persons = [{ name: 'John Jones' }, { name: 'Alex Alex' }, { name: 'Luck luck' }]
    const buttonWidth = 150
    return (
        <Window title='Assign developer'>
            <List gap={20} style={{ padding: '0 40px 40px 40px' }}>
                <form name="" id="">
                    <List>
                        {persons.map((e, key) => {
                            return (
                                <SelectPerson name={e.name} key={key} />
                            )
                        })}
                    </List>
                </form>
                <Box>
                    <Button style={{ background: 'white', color: colors.dark, width: buttonWidth, aspectRatio: '3/1' }}>
                        Cancel
                    </Button>
                    <Button style={{ width: buttonWidth, aspectRatio: '3/1' }}>
                        Add
                    </Button>
                </Box>
            </List>
        </Window>
    )
}