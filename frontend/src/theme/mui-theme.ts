import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f0eefc',
      contrastText: '#0d0b1e',
    },
    warning: {
      main: '#f87171',
    },
    error: {
      main: '#f87171',
    },
    background: {
      default: '#0d0b1e',
      paper: '#161430',
    },
    text: {
      primary: '#f0eefc',
      secondary: 'rgba(240,238,252,0.45)',
    },
    divider: 'rgba(255,255,255,0.07)',
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    subtitle1: {
      fontStyle: 'normal',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#161430',
          color: '#f0eefc',
          border: '1px solid rgba(255,255,255,0.07)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#f0eefc',
          '& fieldset': {
            borderColor: 'rgba(255,255,255,0.15)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255,255,255,0.3)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#a855f7',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(240,238,252,0.45)',
          '&.Mui-focused': {
            color: '#a855f7',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#f0eefc',
        },
        icon: {
          color: 'rgba(240,238,252,0.45)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1b3a',
          color: '#f0eefc',
          '&:hover': {
            backgroundColor: '#252246',
          },
          '&.Mui-selected': {
            backgroundColor: 'oklch(0.72 0.22 290 / 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 4px 20px oklch(0.72 0.22 290 / 0.25)',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#a855f7',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1b3a',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#161430',
          border: '1px solid rgba(255,255,255,0.07)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: '#f0eefc',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root': {
            color: 'rgba(240,238,252,0.45)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#a855f7',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#161430',
          backgroundImage: 'none',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255,255,255,0.07)',
          backgroundColor: '#161430',
          color: '#f0eefc',
          '& ::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '& ::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '& ::-webkit-scrollbar-thumb': {
            background: 'rgba(255,255,255,0.18)',
            borderRadius: '3px',
          },
        },
        columnHeader: {
          backgroundColor: '#1e1b3a',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          '&:focus, &:focus-within': {
            outline: 'none',
          },
        },
        columnHeaderTitle: {
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          fontSize: '13px',
          color: 'rgba(240,238,252,0.65)',
          letterSpacing: '0.04em',
        },
        row: {
          '&:hover': {
            backgroundColor: '#1e1b3a',
          },
          '&.Mui-selected': {
            backgroundColor: 'oklch(0.72 0.22 290 / 0.08)',
            '&:hover': {
              backgroundColor: 'oklch(0.72 0.22 290 / 0.12)',
            },
          },
        },
        cell: {
          borderColor: 'rgba(255,255,255,0.05)',
          fontSize: '13px',
          '&:focus, &:focus-within': {
            outline: 'none',
          },
        },
        columnSeparator: {
          color: 'rgba(255,255,255,0.07)',
        },
        sortIcon: {
          color: 'rgba(240,238,252,0.4)',
        },
        footerContainer: {
          backgroundColor: '#1e1b3a',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        },
        overlay: {
          backgroundColor: '#161430',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
