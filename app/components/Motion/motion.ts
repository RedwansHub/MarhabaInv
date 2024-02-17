export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const slideUp0 = {
  initial: {
      y: "100%"
  },
  open: (i : any) => ({
      y: "0%",
      transition: {duration: 1.5, delay: 0.05 * i}
  }),
  closed: {
      y: "100%",
      transition: {duration: 1.5}
  }
}

export const opacity0 = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 1.5}
  },
  closed: {
      opacity: 0,
      transition: {duration: 1.5}
  }
}

export const slideUp2 = {
  initial: {
      y: 300
  },
  enter: {
      y: 0,
      transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
  }
}

export type bannerItem = {
    initial: {
      opacity?: number | string;
      x?: string | number;
      y?: string | number;
    },
    animate: {
      opacity?: number | string;
      x?: string | number;
      y?: string | number;
      transition?: {
        ease?: number[] | string ,
        duration?: number,
        delayChildren?: number,
        staggerChildren?: number,
      },
    },
    exit?: {
      opacity?: number | string;
      x?: string | number;
      y?: string | number;
      transition?: {
        ease: number[] | string ,
        duration: number,
        delayChildren: number,
        staggerChildren: number,
        
      },
    },
  }
export const slideLeft:bannerItem = {
  initial: { x: 300, opacity: 0 },
  animate: {
    x: 0, opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};
export const letterAni:bannerItem = {
    initial: { y: 400 },
    animate: {
      y: 0,
      
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };

export const banner:bannerItem = {
    initial: {
      
    },
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };


  export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {x: 80},
    enter: (i  : any) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: (i  : any) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}
export const expand = {
    open: {height: 150, transition: {duration: 1.2}},
    closed: {height: 80, transition: {duration: 0.5}}
}

export const slideUp3 = {
  initial: {
      y: "100%"
  },
  open: (i : any) => ({
      y: "0%",
      transition: {duration: 0.5, delay: 0.01 * i}
  }),
  closed: {
      y: "100%",
      transition: {duration: 0.5}
  }
}

export const opacity3 = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 0.5}
  },
  closed: {
      opacity: 0,
      transition: {duration: 0.5}
  }
}