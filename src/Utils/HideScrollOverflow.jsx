// utils.js
export const HideScrollOverflow = (show) => {
    if (show) {
      document.body.classList.add('overflow_hidden');
    } else {
      document.body.classList.remove('overflow_hidden');
    }
  };
  