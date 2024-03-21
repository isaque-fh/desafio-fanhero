import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: theme.spacing(28),
      padding: '0 20px'
    },
    btn: {
      color: theme.palette.text.primary,
      width: '100%',
      boxSizing: 'border-box',
      margin: '0 auto',
      '&:hover': {
        color: theme.palette.primary.main
      }
    }
  })
)
