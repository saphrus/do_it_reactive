<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\FluidTYPO3\Flux\Core::registerProviderExtensionKey('DoIt.DoItReactive', 'Page');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('DoIt.DoItReactive', 'Content');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('DoIt.DoItReactive', 'Backend');
