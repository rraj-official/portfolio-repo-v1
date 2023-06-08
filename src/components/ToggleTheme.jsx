import React from 'react'
import { darkTheme } from '../data/theme'
import { useState } from "react";

const ToggleTheme = ({ theme, onToggleTheme }) => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div style={{ '--theme_base_color': theme.base_color, '--theme_para_text_color': theme.para_text_color, '--theme_color': theme.color }}>
            <div className="relative flex flex-col items-left px-[15px] pt-[200px] overflow-hidden">
                <div className="flex">
                    <label class="inline-flex relative items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={enabled}
                            readOnly
                        />
                        <div
                            onClick={() => {
                                setEnabled(!enabled);
                                onToggleTheme();
                            }}
                            className="w-11 h-6 bg-theme-color rounded-full peer peer-focus:ring-gray  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-theme-color"
                        ></div>

                    </label>
                    <span className="ml-5 text-l font-light text-theme-color">
                        CHANGE THEME
                    </span>
                </div>
            </div>
        </div>


    )
}

export default ToggleTheme