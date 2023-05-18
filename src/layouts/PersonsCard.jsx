import styles from './styles/_persons-card.module.scss'
import { Button } from '@ui/Button'
import { SelectPerson } from '@components/SelectPerson/SelectPerson'
import { Window } from '@components/ui/Window'
import { Box } from '@components/ui/Box'
import { List } from '@components/ui/List'
import colors from '@styles/colors.json'

export const PersonsCard = ({users, closeAction, className, onSubmit}) => {
    
    const buttonWidth = 150
    return (
        <Window title='Assign developer' closeAction={closeAction}>
            <List gap={40} style={{ padding: '20px 40px' }}>
                <form name="" id="">
                    <List>
                        {users?  users.map((e, key) => {
                            return (
                                <SelectPerson value={e.value} className={className} photo={e.photo} name={e.label} key={key} />
                            )
                        }):<></>}
                    </List>
                </form>
                <Box>
                    <Button onClick={closeAction} style={{ background: 'white', color: colors.dark, width: buttonWidth, aspectRatio: '3/1' }}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} style={{ width: buttonWidth, aspectRatio: '3/1', background: colors.main }}>
                        Add
                    </Button>
                </Box>
            </List>
        </Window>
    )
}