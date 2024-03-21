import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: theme.palette.text.primary,
      width: '100%',
      boxSizing: 'border-box',
    },
    content: {
      color: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      gap: theme.spacing(3),
    },
  })
)