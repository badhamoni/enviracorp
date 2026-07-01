import React from 'react';

export default function Logo({
  showTagline = false,
  iconOnly = false,
  src = '/assets/logo.png',
  size = 42,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      <img
        src={src}
        alt="NRIVA logo"
        className="object-contain"
        style={{ height: size }}
      />

      {!iconOnly && (
        <div className="flex items-center gap-3 items-start">
          <span className="text-white font-bold lowercase tracking-tight text-2xl -ml-2 -mt-1">
            nriva
          </span>

          {showTagline && (
            <div className="hidden lg:flex items-center gap-4">
              <span className="block h-8 w-px bg-white/40" />
              <div className="flex flex-col gap-1 uppercase tracking-[0.45em] text-[9px] font-semibold text-white/75 leading-none">
                <span className="whitespace-nowrap">TALENT. TECHNOLOGY.</span>
                <span className="whitespace-nowrap">TRANSFORMATION.</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
