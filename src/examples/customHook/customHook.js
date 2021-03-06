import * as React from 'react';

export function NewCode() {
  const mouse = useMouse();
  return (
    <div>
      Mouse x: {mouse.x} y: {mouse.y}
    </div>
  );
}

/* Separate file */

function useMouse() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  function updateMouse(event) {
    setMouse({ x: event.x, y: event.y });
  }

  React.useEffect(() => {
    document.addEventListener('mousemove', updateMouse);
    return () => document.removeEventListener('mousemove', updateMouse);
  }, [mouse]);

  return mouse;
}
