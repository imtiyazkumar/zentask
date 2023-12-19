/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { IconMenu2 } from "@tabler/icons-react";
import { Div, Flex } from "../../../components/BaseComponents";

interface TopbarProps {
    onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {

    return (
        <Flex className="h-16 gap-6 px-6 border-b print:hidden border-border-dark">
            <Div className="cursor-pointer md:hidden" onClick={onMenuClick}><IconMenu2 size={24} className="text-neutral-900" /></Div>
            Zentask
        </Flex>
    );
};

export default Topbar;
